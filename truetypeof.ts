// https://learn.javascript.ru/instanceof#bonus-object-prototype-tostring-vozvraschaet-tip

type TrueType =
  'object' |
  'array' |
  'function' |
  'undefined' |
  'null' |
  'symbol' |
  'number' |
  'bigint' |
  'string' |
  'boolean' |
  'nan'

export function truetypeof(elem: any): TrueType {
    const type = Object.prototype.toString.call(elem).slice(8, -1).toLowerCase();
    if (type === 'number' && Number.isNaN(elem)) return 'nan';
    return type;
}
