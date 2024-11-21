const fullNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberRegex = /^(?:\+34\s?)?([6789]\d{8})$/;
const companyNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9&.,'\- ]+$/;

class Validation {

    validateNewClient(clientObj) {
        return Object.values(clientObj).includes("") ? null : clientObj
    }

    name(name) {
        return fullNameRegex.test(name)
    }

    email(email) {
        return emailRegex.test(email)
    }

    phone(phone) {
        return phoneNumberRegex.test(phone)
    }

    notEmptyStr(str) {
        return str.length > 0
    }

    contactForm(contactForm) {
        return !Object.entries(contactForm).some(([key, value]) => value === "")
    }

    getQueryParam(param) {
        const url = new URL(window.location.href); // Get the current URL
        return url.searchParams.get(param); // Get the value of the specified parameter
    }
}

const validation = new Validation();

export default validation;
