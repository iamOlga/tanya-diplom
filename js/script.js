function btn_filter_click(el) {
    if (el.classList.contains("active") && el.classList.contains("filter_button-focus-on")) {
        el.classList.remove('active');
        el.classList.remove('filter_button-focus-on');
    }
    else {
        let parent = document.getElementById('filter_buttons');
        if (parent.hasChildNodes()) {
            let children = parent.childNodes;
            for (let i = 0; i < children.length; i++) {
                let elem = parent.children[i];
                if (!!elem) {
                    if (elem.classList.contains("active"))
                        elem.classList.remove('active');
                    if (elem.classList.contains("filter_button-focus-on"))
                        elem.classList.remove('filter_button-focus-on');
                }
            }
        }

        el.classList.add('active');
        el.classList.add('filter_button-focus-on');
    }

    let parent_selections = document.getElementById('filter_selections');
    if (parent_selections.hasChildNodes()) {
        let children = parent_selections.childNodes;
        for (let i = 0; i < children.length; i++) {
            let elem = parent_selections.children[i];
            if (!!elem) {
                if (elem.classList.contains("active"))
                    elem.classList.remove('active');
                if (elem.classList.contains("filter_selection-focus-on"))
                    elem.classList.remove('filter_selection-focus-on');
            }
        }
    }
}

function btn_selection_click(el) {
    if (el.classList.contains("active") && el.classList.contains("filter_selection-focus-on")) {
        el.classList.remove('active');
        el.classList.remove('filter_selection-focus-on');
    }
    else {
        let parent = document.getElementById('filter_selections');
        if (parent.hasChildNodes()) {
            let children = parent.childNodes;
            for (let i = 0; i < children.length; i++) {
                let elem = parent.children[i];
                if (!!elem) {
                    if (elem.classList.contains("active"))
                        elem.classList.remove('active');
                    if (elem.classList.contains("filter_selection-focus-on"))
                        elem.classList.remove('filter_selection-focus-on');
                }
            }
        }

        el.classList.add('active');
        el.classList.add('filter_selection-focus-on');
    }
}




////////////////////
$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});