// find <label for="xyz">
export function inputLabel(node) {
    return (node.id && $('label[for="' + node.id + '"]').val()) || node.name;
}

// import values into <input> commands
export function setInputValues(opt, data) {
    if (typeof data === 'undefined') {
        data = {};
    }

    $.each(opt.inputs, function (key, item) {
        switch (item.type) {
            case 'text':
            case 'textarea':
                item.value = data[key] || '';
                break;

            case 'checkbox':
                item.selected = data[key] ? true : false;
                break;

            case 'radio':
                item.selected = (data[item.radio] || '') === item.value;
                break;

            case 'select':
                item.selected = data[key] || '';
                break;
        }
    });
}

// export values from <input> commands
export function getInputValues(opt, data) {
    if (typeof data === 'undefined') {
        data = {};
    }

    $.each(opt.inputs, function (key, item) {
        switch (item.type) {
            case 'text':
            case 'textarea':
            case 'select':
                data[key] = item.$input.val();
                break;

            case 'checkbox':
                data[key] = item.$input.prop('checked');
                break;

            case 'radio':
                if (item.$input.prop('checked')) {
                    data[item.radio] = item.value;
                }
                break;
        }
    });

    return data;
}

// determine zIndex
export function zindex($t) {
    let zin = 0,
        $tt = $t;

    while (true) {
        zin = Math.max(zin, parseInt($tt.css('z-index'), 10) || 0);
        $tt = $tt.parent();
        if (!$tt || !$tt.length || 'html body'.indexOf($tt.prop('nodeName').toLowerCase()) > -1) {
            break;
        }
    }
    return zin;
}