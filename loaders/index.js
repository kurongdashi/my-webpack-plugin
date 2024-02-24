/**
 *
 * @param source webpack compiler对象传递的文件内容
 * @returns newSource 需要返回一个变化后的文件内容
 */
module.exports = function (source) {
  // webpack会注入许多方法
  /**
   * 如果使用callback则必须return undefined
   * this.callback(
   * err:Error|null,
   * content:string|buffer,
   * sourceMap?:sourceMap,
   *
   * )
   */
  this.callback(null, source);
  return;
  //   return source;
};
