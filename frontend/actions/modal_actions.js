export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const showModal = (modal) => ({
  type: SHOW_MODAL,
  modal,
});

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};
