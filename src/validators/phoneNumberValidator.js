export const phoneNumber = value =>
    value && !/^(8[0-9]{10})$/i.test(value)
        ? 'Номер должен быть в формате 8xxxxxxxxxx'
        : undefined