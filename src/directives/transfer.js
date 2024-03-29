function getTarget(node) {
  if (node === void 0) {
    node = document.body;
  }
  if (node === true) {
    return document.body;
  }
  return node instanceof window.Node ? node : document.querySelector(node);
}
// https://v3-migration.vuejs.org/breaking-changes/custom-directives.html#_3-x-syntax
const transfer = {
  mounted(el, binding) {
    const value = binding.value;
    if (value === false) return false;
    el.className = el.className ? el.className + " v-transfer" : "v-transfer";
    const parentNode = el.parentNode;
    if (!parentNode) return;
    const home = document.createComment("");
    let hasMovedOut = false;
    if (value !== false) {
      parentNode.replaceChild(home, el); // moving out, el is no longer in the document
      getTarget(value).appendChild(el); // moving into new place
      hasMovedOut = true;
    }
    if (!el.__transferDomData) {
      el.__transferDomData = {
        parentNode: parentNode,
        home: home,
        target: getTarget(value),
        hasMovedOut: hasMovedOut
      };
    }
  },
  updated(el, binding) {
    const value = binding.value;
    if (value === false) return false;
    // need to make sure children are done updating (vs. `update`)
    const ref$1 = el.__transferDomData;
    if (!ref$1) return;
    // homes.get(el)
    const parentNode = ref$1.parentNode;
    const home = ref$1.home;
    const hasMovedOut = ref$1.hasMovedOut; // recall where home is

    if (!hasMovedOut && value) {
      // remove from document and leave placeholder
      parentNode.replaceChild(home, el);
      // append to target
      getTarget(value).appendChild(el);
      el.__transferDomData = Object.assign({}, el.__transferDomData, {
        hasMovedOut: true,
        target: getTarget(value)
      });
    } else if (hasMovedOut && value === false) {
      // previously moved, coming back home
      parentNode.replaceChild(el, home);
      el.__transferDomData = Object.assign({}, el.__transferDomData, {
        hasMovedOut: false,
        target: getTarget(value)
      });
    } else if (value) {
      // already moved, going somewhere else
      getTarget(value).appendChild(el);
    }
  },
  unmounted(el, binding) {
    const value = binding.value;
    if (value === false) return false;
    el.className = el.className.replace("v-transfer", "");
    const ref$1 = el.__transferDomData;
    if (!ref$1) return;
    if (el.__transferDomData.hasMovedOut === true) {
      el.__transferDomData.parentNode &&
        el.__transferDomData.parentNode.appendChild(el);
    }
    el.__transferDomData = null;
  }
};

export default transfer;
