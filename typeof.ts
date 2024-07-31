// https://learn.javascript.ru/instanceof#bonus-object-prototype-tostring-vozvraschaet-tip

enum Type {
  Object = 'object',
  Array = 'array',
  Function = 'function',
  Undefined = 'undefined',
  Null = 'null',
  Symbol = 'symbol',
  Number = 'number',
  BigInt = 'bigint',
  String = 'string',
  Boolean = 'boolean',
  NaN = 'nan',
}

type RealType =
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

export function typeOf(elem: any): RealType {
    const type = Object.prototype.toString.call(elem).slice(8, -1).toLowerCase();
    if (type === 'number' && Number.isNaN(elem)) return 'nan';
    return type;
}


JS build-in type-check functions:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
- https://stackoverflow.com/questions/767486/how-do-i-check-if-a-variable-is-an-array-in-javascript
