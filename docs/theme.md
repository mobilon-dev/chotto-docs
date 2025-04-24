---
outline: deep
---


# Темы

Для изменения внешнего вида интерфейса чата предусмотрена система тем. Далее будут рассмотрены имеющиеся переменные, с которыми можно взаимодействовать.

## Основные переменные

В таблицах описаны переменные, влияющие на весь интерфейс чата в целом


### Шрифт
| Наименование  | Предназначение |
|-------|-----|
| --chotto-container-font-family  | Семейство шрифтов для всего чата  |
| --chotto-container-font-weight  | Основная толщина шрифта для всего чата |

### Кегль и толщина шрифта основных элементов
| Наименование  | Предназначение |
|-------|-----|
| --chotto-header-font-size  | Кегль заголовков  |
| --chotto-title-font-size  | Кегль акцентных надписей |
| --chotto-text-font-size  | Кегль основного текста  |
| --chotto-additional-text-font-size  | Кегль дополнительного текста  |
| --chotto-small-text-font-size  | Кегль третичного информационного текста  |
| --chotto-header-font-weight  | Толщина начертания заголовков |
| --chotto-title-font-weight  | Толщина начертания акцентных надписей |
| --chotto-button-icon-size  | Размер кнопки |
| --chotto-text-icon-size  | Размер иконки, сопоставимой с основным текстом |
| --chotto-small-text-icon-size  | Размер вторичных иконок |


### Цветовая палитра

| Наименование  | Предназначение |
|-------|-----|
| --chotto-primary-color  | Основной цвет, применяемый в чате (чаще всего фон) |
| --chotto-secondary-color  | Вторичный цвет |
| --chotto-primary-text-color  | Цвет основного текста |
| --chotto-secondary-text-color  | Цвет дополнительного текста |
| --chotto-button-color-active  | Цвет активной кнопки |
| --chotto-button-color-hover  | Цвет активной кнопки в момент наведения курсора мыши |
| --chotto-button-color-disabled  | Цвет заблокированной кнопки |
| --chotto-shadow-color  | Цвет сильного затенения |
| --chotto-shadow-light-color  | Цвет теневой обводки элементов |
| --chotto-status-color-received  | Цвет статуса сообщения - доставлено собеседнику |
| --chotto-status-color-read  | Цвет статуса сообщения - прочитано собеседников  |
| --chotto-item-background-color-focus  | Цвет фона выбранного элемента плиточного типа |
| --chotto-item-background-color-hover  | Цвет фона элемента плиточного типа в момент наведения курсора мыши |
| --chotto-unread-background-color  | Цвет фона индикатора непрочитанных сообщений  |
| --chotto-unread-text-color  | Цвет надписи индикатора непрочитанных сообщений |

### Границы

| Наименование  | Предназначение |
|-------|-----|
| --chotto-container-borders  |  Толщина, тип линии и цвет для границ контейнера и лэйаутов |
| --chotto-item-border-color  |  Цвет границ для внутренних элементов чата |


### Скроллбар
| Наименование  | Предназначение |
|-------|-----|
| --chotto-scrollbar-bg | Цвет полосы прокрутки |
| --chotto-scrollbar-thumb-bg | Цвет подвижной части полосы прокрутки, показывающей текущее положение на странице |
## Контейнеры
Далее описаны переменные, влияющие на дополнительные моменты, связанные с FloatContainer и модальными окнами
### FloatContainer
| Наименование  | Предназначение |
|-------|-----|
| --chotto-float-container-border-radius-header  | Радиус скругления верхних углов шапки контейнера  |
| --chotto-float-container-box-shadow  | Настройка box-shadow для обводки контейнера |
| --chotto-float-container-bg-header  | Цвет фона шапки контейнера |

### Модальные окна
| Наименование  | Предназначение |
|-------|-----|
| --chotto-modal-padding  | Внутренний отступ от края модального окна  |
| --chotto-modal-border-radius  | Радиус скругления углов модального окна  |
| --chotto-modal-mask-background  | Цвет маски, окружающей модальное окно |
| --chotto-modal-overlay-shadow  | Настройка box-shadow для обводки модального окна |
| --chotto-modal-bg  | Цвет фона модального окна |

## Разметка (Layout)

### Extended
Для трёхколоночной разметки предусотрены следующие параметры:

| Наименование  | Предназначение |
|-------|-----|
| --chotto-layout-extended-third-col-bg  |  Цвет фона третьей колонки |
| --chotto-layout-extended-second-col-bg  |  Цвет фона второй колонки |
| --chotto-layout-extended-first-col-bg  | Цвет фона первой колонки |
### Base

Для двухколоночной разметки предусотрены следующие параметры:


| Наименование  | Предназначение |
|-------|-----|
| --chotto-layout-base-second-col-bg  | Цвет фона второй колонки |
| --chotto-layout-base-first-col-bg  | Цвет фона первой колонки |

### Feed

Для одноколоночной разметки предусотрен следующий параметр:

| Наименование  | Предназначение |
|-------|-----|
| --chotto-layout-feed-bg  | Цвет фона колонки |


## Компоненты

Для некоторых компонентов существуют специфические параметры, поддающиеся настройке.

### Аватары

| Наименование  | Предназначение |
|-------|-----|
| --chotto-avatar-small  | Диаметр малого аватара |
| --chotto-avatar-medium  | Диаметр среднего аватара |
| --chotto-avatar-small-icon-size  | Малый размер иконки  |
| --chotto-avatar-medium-icon-size  | Средний размер иконки |
| --chotto-avatar-border-radius  | Радиус скругления углов аватара |
| --chotto-avatar-background-color  | Цвет фона иконки-заглушки |
| --chotto-avatar-color  | Цвет иконки-заглушки |

### ChatPanel

| Наименование  | Предназначение |
|-------|-----|
| --chotto-chat-panel-border-radius  |  Радиус скругления углов (левого верхнего и нижнего) у панели дополнительной информации |

### Sidebar

| Наименование  | Предназначение |
|-------|-----|
| --chotto-sidebar-padding-container  | Внутренний отступ от границ контейнера |
| --chotto-sidebar-row-gap-list  | Промежуток между элементами |
| --chotto-sidebar-image-active-border  | Обводка активного элемента (толщина, тип линии, цвет) |
| --chotto-sidebar-list-fixed-border-top  | Разделитель между списками элементов (толщина, тип линии, цвет) |

### ChatInfo

| Наименование  | Предназначение |
|-------|-----|
| --chotto-chat-info-padding  |  Внутренний отступ |
| --chotto-chat-info-border-radius  | Радиус скругления углов |

### ChatItem

| Наименование  | Предназначение |
|-------|-----|
| --chotto-chat-item-padding-container  | Внутренний отступ в контейнере чата |
| --chotto-chat-item-border-radius  | Радиус скругления углов блока чата |

### ChatList

| Наименование  | Предназначение |
|-------|-----|
| --chotto-chat-list-filter-margin  | Смещение поля ввода для поиска по чатам |
| --chotto-chat-list-items-padding  | Внутренний отступ для списка чатов |
| --chotto-chat-list-title-container-padding  | Внутренний отступ для заголовка "Чаты" |
| --chotto-chat-list-fixed-background-color  | Цвет фона закреплённых чатов |

### Input (все)

| Наименование  | Предназначение |
|-------|-----|
| --chotto-input-border  | Граница поля ввода (толщина, тип линии, цвет)  |
| --chotto-input-hover-border-color  | Цвет границы в момент наведения курсора мыши на поле ввода  |
| --chotto-input-focus-border-color  | Цвет границы в момент выделения поля ввода |
| --chotto-input-border-radius  | Радиус скругления углов поля ввода |
| --chotto-input-background  | Цвет фона поля ввода |
| --chotto-input-padding  | Внутренний отступ текста от границ поля ввода |
| --chotto-input-transition-duration  | Время перехода между состояниями поля ввода |
| --chotto-input-font-size  | Кегль текста в поле ввода |

### ChatInput

| Наименование  | Предназначение |
|-------|-----|
| --chotto-chat-input-container-bg  | Цвет фона контейнера, оборачивающего блок компонентов для ввода сообщения  |
| --chotto-chat-input-icon-color  | Цвет кнопки для отправления сообщения |
| --chotto-chat-input-icon-color-disabled  | Цвет заблокированной кнопки для отправления сообщения  |

### Tooltip

| Наименование  | Предназначение |
|-------|-----|
| --chotto-tooltip-text-color  | Цвет текста всплывающей подсказки  |
| --chotto-tooltip-bg-color  | Цвет фона всплывающей подсказки |

### WABATemplateSelector

| Наименование  | Предназначение |
|-------|-----|
| --chotto-variable-placeholder-empty-color  | Цвет фона пустого поля ввода переменной в шаблоне |
| --chotto-variable-placeholder-filled-color  | Цвет фона заполненного поля ввода переменной в шаблоне  |

### WABAAttachmentSection

| Наименование  | Предназначение |
|-------|-----|
| --chotto-attachment-section-color  | Цвет фона блока-кнопки для прикрепления файлов  |
| --chotto-attachment-section-hover-color  | Цвет фона блока-кнопки в момент наведения курсора мыши |
| --chotto-attachment-section-error-color  | Цвет текста, сигнализирующего об ошибке в процессе выбора, загрузки файлов |

### WABAQuickReplyButtons

| Наименование  | Предназначение |
|-------|-----|
| --chotto-quick-reply-buttons-color  | Цвет надписей, иконок в блоке кнопок быстрого ответа  |


## Сообщения

Каждое сообщение основывается на общих переменных, представленных в таблице

| Наименование  | Предназначение |
|-------|-----|
| --chotto-message-right-bg  | Фон сообщения, располагаемого справа  |
| --chotto-message-right-secondary-bg  | Вторичный цвет для сообщений, располагаемых справа |
| --chotto-message-left-bg  |  Фон сообщения, располагаемого слева |
| --chotto-message-left-secondary-bg  |  Вторичный цвет для сообщений, располагаемых слева |
| --chotto-message-accent-line-color  | Цвет акцентного отделителя сопутствующего контента от основного сообщения |
| --chotto-message-focused-color  | Цвет выделения сообщения при поиске |
| --chotto-message-margin  | Отступ контейнера сообщения  |
| --chotto-message-type-icon-bg-color  | Цвет фона для иконки типа сообщения |
| --chotto-message-type-icon-color  | Цвет иконки типа сообщения |
| --chotto-message-popup-info-bg-color  |  Цвет фона всплывающего сообщения с атрибутами изображения, видео |
| --chotto-message-popup-info-color  | Цвет символов во всплывающем сообщении  |

Также представлены некоторые дополнительные переменные, влияющие на специфические особенности типов сообщений.

### AudioMessage

| Наименование  | Предназначение |
|-------|-----|
| --chotto-audio-message-transcript-delimiter-color  | Цвет акцентного отделителя транскрипции аудио сообщения от основного сообщения  |
| --chotto-audio-message-pbc-background-color  | Фоновый цвет таймлайна аудио  |
| --chotto-audio-message-pb-background-color  | Цвет полосы прошедшего времени  |

### CallMessage

| Наименование  | Предназначение |
|-------|-----|
| --chotto-call-message-phone-icon-missed-color  | Цвет иконки телефона для сигнализации пропущенного звонка |

### SystemMessage

| Наименование  | Предназначение |
|-------|-----|
| --chotto-system-message-bg-color  | Цвет фона системного сообщения  |