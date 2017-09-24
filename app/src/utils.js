/*
 * Package Import
 */


/*
 * Local Import
 */


/*
 *  Code
 */

/**
 * NormalizeDatas
 * @param  {Array} datas ->
 * @return {Object}
 */
export const normalizeDatas = (datas) => {
  const structureNormalize = {
    byId: {},
    allIds: [],
  };

  datas.forEach((data) => {
    const { id, slug, label, logo } = data;
    const newData = { id, slug, label, logo };

    structureNormalize.byId[data.id] = newData;
    structureNormalize.allIds.push(data.id);
  });

  return structureNormalize;
};


/**
 * Debounce
 * @param  {Func}
 * @param  {Number}  Wait -> Default: 20
 * @param  {Boolean} Immediate -> Defualt: True
 * @return {Func}
 */
export const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;

    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(later, wait);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};


/*
 * Export
 */
