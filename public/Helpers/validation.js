const validationMethod = (item) => {
    if (!item.title) {
        alert("title is missing");
    }
};
const clearInputField = (item) => {
    item.completionDate = "";
    item.description = "";
    item.title = "";
};
export { clearInputField, validationMethod };
