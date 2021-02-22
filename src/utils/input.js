export const isValidInput = (value, type) => {
    if(!value) {
        return null;
    }

    if (type === "email") {
        return isValidEmail(value);
    } else if (type === "number") {
        return isValidNumber(value);
    } else if (type === "url") {
        return isValidURL(value);
    }
}

const isValidEmail = (value) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(value.match(emailRegex)) {
        return true;
    }

    return "Email is invalid.";
}

const isValidNumber = (value) => {
    const numberRegex = new RegExp('^[0-9]*$');

    if(value.match(numberRegex)) {
        return true;
    }

    return "Value is not a number.";
}

const isValidURL = (value) => {
    const urlRegex = new RegExp('^(https?:\\/\\/)?'+ // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    if(value.match(urlRegex)) {
        return true;
    }

    return "Link is invalid.";
}