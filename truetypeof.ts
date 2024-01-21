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
  'boolean'

export function truetypeof(elem: unknown): TrueType {
  retutn Object.prototype.toString.call(elem).slice(8, -1).toLowerCase();
}
