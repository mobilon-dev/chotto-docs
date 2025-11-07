---
outline: deep
---


# Изменения в версиях библиотеки

Некоторые ключевые изменения компонентов библиотеки необходимо учитывать при обновлении версии в своём проекте: вполне вероятен исход, при котором реализация, работавшая ранее, с новой версией перестаёт корректно функционировать. Во избежание подобных ситуаций рекомендуется отслеживать изменения - для облегчения данного процесса организован этот раздел документации. 

## 0.111

  Компонент ChatList
  - Новое свойство в props: titleEnabled: Boolean. titleEnabled включает демонстрацию титула "Чаты", по умолчанию true.
  - Новое свойство в props: filterQuery: String. filterQuery замещает внутреннюю переменную для фильтра чатов по строке, если filterEnabled = false и есть необходимость в размещении ChatFilter отдельно.
  - Вырезана кнопка действий рядом с титулом "Чаты" (кнопка в виде плюса, открывающая контекстное меню) - вместо этой кнопки предусмотрен слот #actions, в который можно внедрить, например, более актуальный компонент ButtonContextMenu.

## 0.117

  Компонент ButtonContextMenu
  - Удалено свойство в props: ButtonClass - применялся для задания иконки триггера контекстного меню.
  - Удалено свойство в props: ButtonTitle - применялся для задания произвольного текста триггера контекстного меню.
  - Добавлен слот #default - через этот слот задаётся внешний вид триггера контекстного меню.

## 0.121

  Компонент ChatInput
  - Добавлен слот #inline-buttons - для размещения кнопок действия в один ряд с полем ввода текста сообщения.
  - Удалён функционал ввода команд из компонента, выделен в отдельный компонент ButtonCommandsSelector.

  Компонент ChatFilter
  - Добавлена иконка лупы в поле ввода.

## 0.122

  - Добавлен компонент ReplyCallMessage - новый вид ответного сообщения
  - Изменён объект ответного сообщения, добавлены поля:
    - header : string (заголовок, например, имя отправителя сообщения, для всех видов сообщений-ответов)
    - callDuration : string (длительность звонка, для ReplyCallMessage) 
    - isMissedCall : boolean (пропущен ли звонок, для ReplyCallMessage)

## 0.125

  - Добавлен функционал изменения оформления некоторых компонентов в зависимости от условия - подробнее описано [здесь](/user-styling.html)

## 0.126

  Компонент ChatInfo
  - Добавлен слот #img-description - предполагается размещение там иконок и иных изображений, описывающих содержимое, как правило, диалога
  - Новое свойство в props: additionalTitle : String. При его наличии на уровне с заголовком отображается дополнительная информация, выделенная цветной границей.

## 0.129

  Добавлен компонент SplashScreen - информационная интерактивная заглушка в случае отсутствия необходимой информации в некоторых компонентах.
  - Интегрированы три слота: #title, #text, #picture - предполагается размещение в этих слотах заголовка, основной информации и некоторого графического и не только объекта соответственно.
  - Представлен emit action - реакция на клик по содержимому слота #picture для реализации интерактивного взаимодействия с заглушкой.

  Компонент ChatWrapper
  - Вырезана заглушка с текстом "Выберите контакт для начала общения".
  - Добавлен слот #placeholder для реализации пользовательской заглушки (например, посредством SplashScreen).

  Компонент Feed
  - Добавлен слот #empty-feed для реализации пользовательской заглушки (например, посредством SplashScreen) в случае отсутствия объектов для визуализации.

## 0.131

  Изменения в работе компонента ChatItem, вложенного в контейнер ChatList.

  Для диалогового чата: 
  - клик по карточке чата - убран дополнительный эффект, связанный с открытием/закрытием панели с диалогами, происходит только emit select с аргументом {chat: Object, dialog: null}.
  - клик по иконке открытия/закрытия дополнительной информации о диалогах - предусмотрен emit expand с аргументом типа Object, содержащим поля сущности чата.
  - клик по диалогу - оставлен emit select с аргументом {chat: Object, dialog: Object}.

  Для стандартного чата схематика работы оставлена прежняя.

## 0.3.10  

 Storybook структура
  - Исправлена структура отображения компонентов в Storybook
  - Добавлены правильные title для всех категорий (Atoms, Blocks, Compounds, etc.)

 Перемещение компонентов
  - `PlaceholderComponent` перемещен из `5_containers` в `2_chatinput_elements`
  - `SplashScreen` перемещен из `5_containers` в `2_feed_elements`

 Создание Stories
  - Добавлены stories для всех компонентов в `5_containers` (BaseContainer, FloatContainer)
  - Добавлены stories для всех компонентов в `4_layouts` (BaseLayout, ChatWrapper, FeedLayout, ExtendedLayout, AdaptiveExtendedLayout)
  - Добавлены stories для SplashScreen

 Исправления импортов
  - Исправлены неправильные пути к компоненту ThemeMode
  - Исправлены импорты в FileUploader.stories.ts
  - Исправлены типы Story в ContactInfo.stories.ts

 Линтер
  - Закомментированы неиспользуемые переменные в MobilonExtendedChatApp.vue
  - Исправлены ошибки парсинга в story файлах

 Архитектура
  - Обновлена структура тем (добавлен global.scss)
  - Реорганизованы валидаторы тем в scripts/validators/

## 0.3.11

  Реорганизация хуков
  - Перенесены `playNotificationAudio` и `insertDaySeparators` из `apps/helpers` в `hooks`
  - Обновлены импорты во всех приложениях:
    - BaseAdaptiveExtendedChatApp
    - BaseBaseChatApp
    - BaseExtendedChatApp
    - BaseFeedChatApp
    - FloatExtendedChatApp
    - MobilonExtendedChatApp

  Унификация импортов
  - Введен единообразный стиль импорта через алиасы `@/components`, `@/types`, `@/hooks`
  - Затронуты все уровни компонентов:
    - Атомы (1_atoms)
    - Блоки (2_blocks)
    - Элементы (2_elements, 2_chatinput_elements, 2_feed_elements)
    - Составные компоненты (3_compounds)

  Централизация типов
  - Типы перемещены ближе к компонентам, где они используются
  - Создан единый индексный файл для экспорта типов из `src/types/index.ts`
  - Типы компонентов организованы в:
    - `2_feed_elements/types/`
    - `3_compounds/ChatInput/types/`

  Централизация экспорта компонентов
  - Удалены отдельные `index.ts` файлы из каждой категории компонентов
  - Создан единый `components/index.ts` для экспорта всех компонентов

## 0.3.12

  Рефакторинг и улучшения

  Организация кода:
  - Перенесены модальные диалоги в hooks (useCreateChat, useCreateChat2, useCreateDialog, useModalSelectUser2)
  - Простые функции вынесены из hooks в /functions (sortByTimestamp, formatTimestamp, getStatusMessage, etc)
  - Список тем вынесен в data
  - Удалена папка /apps/helpers (функционал перенесен в hooks и functions)

  Валидация:
  - Добавлен реактивный валидатор чатов (выводит отчет о проблемах в консоль)
  - Добавлен валидатор сообщений
  - Добавлен валидатор sidebar items

  Документация:
  - Добавлен JSDoc для функций
  - Добавлена документация для useMessage hook

  Оптимизация сборки (текущие изменения):
  - Убраны статические экспорты для динамически загружаемых компонентов (SelectUser2, CreateChat, CreateChat2, CreateDialog)
  - Исправлены предупреждения Vite о конфликте статических и динамических импортов
  - Компоненты модалов теперь загружаются только по требованию (code splitting работает корректно)

## 0.3.13

  Удален extChatAppId
  - Удалён избыточный prop extChatAppId из контейнеров

  Уплотнили хуки модальных диалогов
  - Перемещены useModal.ts и useVideoRecorder.ts в /hooks/modals/
  - Очистка экспортов, создан TODO.md

  Перенес валидаторы в hooks, экспортируем
  - Validators: /apps/validators/ → /hooks/validators/
  - Исправлен конфликт типов ChatList → ChatsArray

  Изменены импорты
  - Все импорты через @/components (единообразие)

## 0.3.15

  Зависимости:
  Обновлены package.json и package-lock.json

  Компоненты модальных окон (2_modals):
  - CreateChat2: значительное расширение функционала, полная система тем для всех 4 тем, новые типы стилей
  - Modal: рефакторинг стилей (168 строк изменено), обновление системы тем для всех вариантов
  SelectUser/SelectUser2: перемещены из 2_blocks в 2_modals

  Приложения:
  - MobilonExtendedChatApp: добавлен новый функционал (+48 строк)

  Темы:
  - Обновлены импорты компонентов во всех 4 темах (dark, default, green, mobilon1)
  - Изменения в green/vars.scss

  Списки чатов:
  - ChatList: новые возможности, обновлен README (+10 строк документации)

  Хуки:
  - Оптимизация useModal.ts (+21 строка)
  Обновление useModalSelectUser2.ts

  Сборка:
  - components/index.ts: удалены статические импорты 5 модальных окон для code-splitting оптимизации

## 0.3.17

  Новые функции в ChatList:
  - Фильтр поиска (ChatFilter) - добавлен компонент фильтрации чатов
  - Фильтрация по табам (ChatTabs) - добавлена возможность фильтрации по вкладкам
  - Обновлены стили и темы для новых компонентов

  Улучшения ChatList:
  - Обновлена логика компонента ChatList.vue
  - Добавлены новые стили и темы (dark, default, green, mobilon1)
  - Обновлена документация README

  Обновления данных:
  - Изменения в src/apps/data/chats.ts
  - Обновлен MobilonExtendedChatApp.vue

## 0.3.18

  Убрано лишнее логирование
  - Удалены все console.log из компонента ChatList.vue
  - Убраны watchers для отслеживания изменений props
  - Очищен код от отладочной информации

  Изменены условия валидации:

  - chatId теперь должен быть строкой (было числом)
  - lastActivity.timestamp теперь должен быть числом (было строкой)
  - Добавлена проверка на существование contact.attributes перед валидацией
  - chatId теперь необязательное поле, но если есть - должно быть строкой
  - Добавлены исключения для системных сообщений типа "system.date"
  - Для системных сообщений messageId и timestamp стали необязательными

## 0.3.19

  - ButtonEmojiPicker - добавлена поддержка режимов клика и наведения
  - Исправлена проблема с импортом фонового изображения по умолчанию

## 0.3.20

  Новые функции:
  - useValidation - добавлен новый хук с выбором валидаторов
  - ChatList - добавлена возможность задавать заголовок списка чатов через пропс

  Исправления:
  - Удален неиспользуемый storybook для Tooltip

  Рефакторинг Feed компонента:
  - Вынесена логика в 9 новых composables:
  - useFeedScrollTo - прокрутка к сообщению
  - useFeedLoadMore - подгрузка сообщений
  - useFeedKeyboard - обработка клавиатуры
  - useFeedReply - обработка ответов
  - useFeedComponents - маппинг компонентов
  - useFeedMessageVisibility - отслеживание видимости
  - useFeedGrouping - группировка сообщений
  - useFeedButton - логика кнопок
  - useStickyDate - sticky даты

## 0.3.21

  Новая функциональность:
  - Добавлены статусы pending и error для сообщений (#13725)
  - Добавлены хуки: useMessageActions, useMessageLinks для работы с сообщениями (#13556)
  - Добавлена функция getMessageClass для компонентов сообщений

  Рефакторинг:
  - useMessage переименован в useMessageDraft
  - useMessageActions и useMessageLinks перемещены в hooks\messages

  Storybook:
  - Обновлены stories для 13 компонентов (SystemMessage, SplashScreen, Reply, DateMessageSticky, ContactInfo, ChannelSelector, ButtonEmojiPicker, FeedKeyboard, TextMessage)
  - Добавлена поддержка тем в Tooltip с новыми примерами позиционирования
  - Исправлена типизация в SplashScreen.stories.ts

## 0.3.22

  Новая функциональность:
  - Добавлены статусы pending и error для сообщений
  - Добавлены хуки useMessageActions и useMessageLinks для работы с сообщениями
  - Добавлена функция getMessageClass для компонентов сообщений

  Рефакторинг:
  - useMessage переименован в useMessageDraft
  - useMessageActions и useMessageLinks перемещены в hooks\messages

  Storybook:
  - Обновлены stories для 13 компонентов (SystemMessage, SplashScreen, Reply*, DateMessageSticky, ContactInfo, ChannelSelector, ButtonEmojiPicker, FeedKeyboard, TextMessage)
  - Добавлена поддержка тем в Tooltip с новыми примерами позиционирования
  - Исправлена типизация в SplashScreen.stories.ts

## 0.3.23

  - MessageReactions: добавлен компонент для реакций на сообщения
  - storybook: добавлен компонент MessageReactions в storybook
  - StickerMessage: устранено предупреждение, добавлены недостающие source map-файлы

## 0.3.24

  - MessageReactions, Feed: добавлен prop для управления видимостью реакций в сообщениях
  - storybook: добавлен пример чата BasicChatExample
  - stories: добавлены примеры реакций для разных типов сообщений в MessageReactions
  - stories: оптимизация Feed и TextMessage