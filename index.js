// Rank of a heading: H1 -> 1, H2 -> 2, etc.
export function headingRank(node) {
  var name =
    (node && node.type === 'element' && node.tagName.toLowerCase()) || ''
  var code =
    name.length === 2 && name.charCodeAt(0) === 104 /* `h` */
      ? name.charCodeAt(1)
      : 0
  return code > 48 /* `0` */ && code < 55 /* `7` */ ? code - 48 /* `0` */ : null
}
