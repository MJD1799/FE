export const insertNode = (tree, root, node) => {
  const parentId = node.id;
  if (root === parentId) {
    const updatedChildern = [...tree.children];

    updatedChildern.unshift({
      id: new Date().getTime(),
      name: node?.name,
      children: [],
      type: node?.type
    });
    //return tree;
    console.log("updated:", updatedChildern);
    return { ...tree, children: updatedChildern };
  } else {
    let updated = [];
    for (let item of tree.children || []) {
      updated.push(insertNode(item, item?.id, node));
    }
    return { ...tree, children: updated };
  }
};
