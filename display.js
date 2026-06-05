document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('categorias');
  const categories = collectCategorySets();

  if (categories.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'No se encontraron categorías para mostrar.';
    container.appendChild(message);
    return;
  }

  categories.forEach(({ name, set, isRidership, data }) => {
    const desplegable = document.createElement('details');
    const nombre = document.createElement('summary');
    const div = document.createElement('div');
    nombre.textContent = name;
    desplegable.appendChild(nombre);
    div.appendChild(desplegable);
    container.appendChild(div);

    // Si es STATION_RIDERSHIP, mostrar como lista ordenada con números ordenados descendentemente
    if (isRidership && data) {
      const list = document.createElement('ol');
      
      // Convertir objeto a array y ordenar descendentemente por valor
      const sortedEntries = Object.entries(data)
        .sort((a, b) => b[1] - a[1]);
      
      sortedEntries.forEach(([station, ridership]) => {
        const listItem = document.createElement('li');

        // Insertar iconos de línea antes del nombre si existen en window.stationLines
        const lines = (window.stationLines && window.stationLines[station]) || [];
        const lineArray = Array.isArray(lines) ? lines : Array.from(lines || []);
        lineArray.forEach((code) => {
          const img = document.createElement('img');
          img.src = `img/${code}.png`;
          img.alt = code;
          img.style.width = '20px';
          img.style.height = 'auto';
          img.style.marginRight = '6px';
          listItem.appendChild(img);
        });

        const textNode = document.createTextNode(`${station} — ${ridership.toLocaleString()}`);
        listItem.appendChild(textNode);
        list.appendChild(listItem);
      });
      desplegable.appendChild(list);
    } else {
      const list = document.createElement('ul');
      Array.from(set).forEach((item) => {
        const listItem = document.createElement('li');

        // Insertar iconos de línea antes del nombre si existen en window.stationLines
        const lines = (window.stationLines && window.stationLines[item]) || [];
        const lineArray = Array.isArray(lines) ? lines : Array.from(lines || []);
        lineArray.forEach((code) => {
          const img = document.createElement('img');
          img.src = `img/${code}.png`;
          img.alt = code;
          img.style.width = '20px';
          img.style.height = 'auto';
          img.style.marginRight = '6px';
          listItem.appendChild(img);
        });

        const textNode = document.createTextNode(item);
        listItem.appendChild(textNode);
        list.appendChild(listItem);
      });
      desplegable.appendChild(list);
    }
    container.appendChild(div);
  });
});

function collectCategorySets() {
  const categories = [];
  const source = window.categorias || window.categories || window.cat || window.cats;
  const categoryNames = window.categoryNames || {};

  if (source && typeof source === 'object') {
    Object.entries(source).forEach(([key, value]) => {
      const displayName = categoryNames[key] || key;
      
      // Detectar si es STATION_RIDERSHIP (es un objeto con valores numéricos)
      const isRidership = key === 'STATION_RIDERSHIP';
      
      if (isRidership) {
        // Para STATION_RIDERSHIP, pasar el objeto completo
        categories.push({ name: displayName, set: null, isRidership: true, data: value });
      } else if (value instanceof Set) {
        categories.push({ name: displayName, set: value, isRidership: false });
      } else if (Array.isArray(value)) {
        categories.push({ name: displayName, set: new Set(value), isRidership: false });
      } else if (value && typeof value === 'object') {
        const values = Object.values(value);
        const allValuesAreSets = values.length > 0 && values.every(v => v instanceof Set);
        if (allValuesAreSets) {
          Object.entries(value).forEach(([subKey, subVal]) => {
            categories.push({ name: `${displayName} — ${subKey}`, set: subVal, isRidership: false });
          });
        } else {
          categories.push({ name: displayName, set: new Set(Object.keys(value)), isRidership: false });
        }
      }
    });
    if (categories.length) {
      return categories;
    }
  }

  Object.entries(window).forEach(([key, value]) => {
    if (value instanceof Set && key !== 'Set' && key !== 'WeakSet') {
      categories.push({ name: key, set: value, isRidership: false });
    }
  });

  return categories;
}
