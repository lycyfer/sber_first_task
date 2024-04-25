import { encoded, translations } from './data.js'
const decodeFields = (encoded, translations) => {
    // Соз
    const uniqueIds = new Set();


    const decoded = encoded.map(obj => {
        // Создаем новый об
        const decodedObj = {};

        // Про
        for (const [key, value] of Object.entries(obj)) {
            // 
            if (!['groupId', 'service', 'formatSize', 'ca'].includes(key)) {
                // Провер
                if (translations.hasOwnProperty(value)) {

                    decodedObj[key] = translations[value];
                } else {
                    //
                    decodedObj[key] = value;
                }
            } else {
                // Если поле н
                decodedObj[key] = value;
            }

            // Если ключ заканчивается на 'Id', то доб
            if (key.endsWith('Id')) {
                uniqueIds.add(value);
            }
        }

        return decodedObj;
    });

    // Возвращаем расшиф
    return { decoded, uniqueIds: Array.from(uniqueIds) };
};

// Использование функции
const { decoded, uniqueIds } = decodeFields(encoded, translations);
console.log(decoded);
console.log(uniqueIds);