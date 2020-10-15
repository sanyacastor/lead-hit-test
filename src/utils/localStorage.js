
export const saveId = (id) => {
  try {
    const serializedId = JSON.stringify(id);
    localStorage.setItem('leadhit-site-id', serializedId);
  } catch (err) {
    console.log(err)
  };
}

export const loadId = () => {
  try {
    const serializedId = localStorage.getItem('leadhit-site-id');
    if (serializedId === null) {
      return undefined;
    }
    return JSON.parse(serializedId);
  } catch (err) {
    return undefined;
  }
};
