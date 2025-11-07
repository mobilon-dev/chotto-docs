---
outline: deep
---

# Темы

Библиотека Chotto использует гибкую систему тем для кастомизации внешнего вида интерфейса. Система поддерживает несколько готовых тем и позволяет создавать собственные темы через CSS переменные.

## Доступные темы

Библиотека включает четыре готовые темы:

- **Default** (light) — светлая тема по умолчанию
- **Dark** — темная тема с нейтральными цветами
- **Green** — зеленая тема с изумрудными акцентами
- **Mobilon1** — брендовая тема Mobilon

## Импорт тем

### Базовый импорт

```javascript
// Импорт основных стилей библиотеки
import '@mobilon-dev/chotto/style.css'
```

### Импорт конкретной темы

Если нужна конкретная тема, можно импортировать отдельно:

```javascript
import '@mobilon-dev/chotto/themes/default.css'
import '@mobilon-dev/chotto/themes/dark.css'
import '@mobilon-dev/chotto/themes/green.css'
import '@mobilon-dev/chotto/themes/mobilon1.css'
```

## Система переменных

Библиотека использует двухуровневую систему CSS переменных:

### 1. Глобальные переменные темы (`--chotto-theme-*`)

Глобальные переменные влияют на весь интерфейс чата. Они определяются через атрибут `data-theme`:

```css
[data-theme="default"] {
  /* Основные цвета */
  --chotto-theme-primary-color: #ffffff;
  --chotto-theme-secondary-color: #faf6f4;
  --chotto-theme-tertiary-color: #a3a3a3;
  
  /* Цвета текста */
  --chotto-theme-primary-text-color: #1e1e1e;
  --chotto-theme-secondary-text-color: #5f5f5f;
  
  /* Типографика */
  --chotto-theme-font-family: 'Montserrat', sans-serif;
  --chotto-theme-header-font-size: 20px;
  --chotto-theme-text-font-size: 15px;
  
  /* Сообщения */
  --chotto-theme-message-right-bg: #d1fae5;
  --chotto-theme-message-left-bg: #e5e5e5;
  
  /* ... и другие переменные (всего 82 переменные) */
}
```

### 2. Переменные компонентов (`--chotto-componentname-*`)

Каждый компонент имеет свои CSS переменные, которые можно переопределять в вашем проекте. Например, для компонента `CommunicationPanel`:

```css
[data-theme="default"] {
  /* Переменные компонента CommunicationPanel */
  --chotto-communicationpanel-background: #ffffff;
  --chotto-communicationpanel-border-color: #e5e5e5;
  --chotto-communicationpanel-btn-active-color: #007CFF;
  --chotto-communicationpanel-btn-hover-background: #f5f5f5;
  --chotto-communicationpanel-menu-background: #ffffff;
  /* ... и другие переменные компонента */
}
```

**Преимущества двухуровневой системы:**
- ✅ Гибкая кастомизация отдельных компонентов
- ✅ Все переменные имеют fallback значения
- ✅ Можно использовать глобальные переменные темы: `var(--chotto-theme-primary-color)`
- ✅ Полная типизация через TypeScript интерфейсы

**Доступные значения `data-theme`:** `"default"`, `"dark"`, `"green"`, `"mobilon1"`

## TypeScript типы

Все глобальные переменные темы типизированы через интерфейс `ChottoThemeVariables`:

```typescript
import type { ChottoThemeVariables } from '@mobilon-dev/chotto'

// Использование типа для валидации переменных
const themeVariables: ChottoThemeVariables = {
  '--chotto-theme-primary-color': '#ffffff',
  '--chotto-theme-secondary-color': '#faf6f4',
  // ... остальные переменные
}
```

Переменные компонентов типизированы в интерфейсах вида `ComponentNameThemeCSSVariables` в соответствующих компонентах.

## Глобальные переменные темы

### Основные цвета

| Наименование | Предназначение |
|-------|-----|
| `--chotto-theme-primary-color` | Основной цвет, применяемый в чате (чаще всего фон) |
| `--chotto-theme-secondary-color` | Вторичный цвет |
| `--chotto-theme-tertiary-color` | Третичный цвет |
| `--chotto-theme-quaternary-color` | Четвертичный цвет |
| `--chotto-theme-quinary-color` | Пятиричный цвет |
| `--chotto-theme-primary-text-color` | Цвет основного текста |
| `--chotto-theme-secondary-text-color` | Цвет дополнительного текста |

### Семантические цвета

| Наименование | Предназначение |
|-------|-----|
| `--chotto-theme-shadow-color` | Цвет сильного затенения |
| `--chotto-theme-shadow-light-color` | Цвет теневой обводки элементов |
| `--chotto-theme-status-color-received` | Цвет статуса сообщения — доставлено собеседнику |
| `--chotto-theme-status-color-read` | Цвет статуса сообщения — прочитано собеседником |
| `--chotto-theme-status-color-error` | Цвет статуса сообщения — ошибка отправки |
| `--chotto-theme-status-color-pending` | Цвет статуса сообщения — отправка |

### Типографика

| Наименование | Предназначение |
|-------|-----|
| `--chotto-theme-font-family` | Семейство шрифтов для всего чата |
| `--chotto-theme-header-font` | Шрифт заголовков |
| `--chotto-theme-header-font-size` | Кегль заголовков |
| `--chotto-theme-header-font-color` | Цвет заголовков |
| `--chotto-theme-title-font-size` | Кегль акцентных надписей |
| `--chotto-theme-text-font-size` | Кегль основного текста |
| `--chotto-theme-additional-text-font-size` | Кегль дополнительного текста |
| `--chotto-theme-small-text-font-size` | Кегль третичного информационного текста |
| `--chotto-theme-context-menu-font-size` | Кегль текста контекстного меню |
| `--chotto-theme-header-font-weight` | Толщина начертания заголовков |
| `--chotto-theme-title-font-weight` | Толщина начертания акцентных надписей |
| `--chotto-theme-default-font-weight` | Основная толщина шрифта для всего чата |
| `--chotto-theme-small-text-font-weight` | Толщина начертания мелкого текста |

### Размеры иконок

| Наименование | Предназначение |
|-------|-----|
| `--chotto-theme-button-icon-size` | Размер иконки кнопки |
| `--chotto-theme-text-icon-size` | Размер иконки, сопоставимой с основным текстом |
| `--chotto-theme-small-text-icon-size` | Размер вторичных иконок |
| `--chotto-theme-avatar-small-size` | Диаметр малого аватара |
| `--chotto-theme-avatar-medium-size` | Диаметр среднего аватара |

### Кнопки

| Наименование | Предназначение |
|-------|-----|
| `--chotto-theme-button-color-active` | Цвет активной кнопки |
| `--chotto-theme-button-color-hover` | Цвет кнопки в момент наведения курсора мыши |
| `--chotto-theme-button-color-disabled` | Цвет заблокированной кнопки |
| `--chotto-theme-action-button-color-active` | Цвет активной кнопки действия |
| `--chotto-theme-action-button-color-hover` | Цвет кнопки действия в момент наведения |
| `--chotto-theme-action-button-color-disabled` | Цвет заблокированной кнопки действия |

### Состояния элементов

| Наименование | Предназначение |
|-------|-----|
| `--chotto-theme-item-background-color-focus` | Цвет фона выбранного элемента плиточного типа |
| `--chotto-theme-item-background-color-hover` | Цвет фона элемента плиточного типа в момент наведения курсора мыши |
| `--chotto-theme-item-border-color` | Цвет границ для внутренних элементов чата |
| `--chotto-theme-unread-background-color` | Цвет фона индикатора непрочитанных сообщений |
| `--chotto-theme-unread-text-color` | Цвет надписи индикатора непрочитанных сообщений |

### Границы

| Наименование | Предназначение |
|-------|-----|
| `--chotto-theme-border` | Толщина, тип линии и цвет для границ контейнера и лэйаутов |

### Скроллбар

| Наименование | Предназначение |
|-------|-----|
| `--chotto-theme-scrollbar-bg` | Цвет полосы прокрутки |
| `--chotto-theme-scrollbar-thumb-bg` | Цвет подвижной части полосы прокрутки, показывающей текущее положение на странице |

## Сообщения

### Общие переменные сообщений

| Наименование | Предназначение |
|-------|-----|
| `--chotto-theme-message-right-bg` | Фон сообщения, располагаемого справа |
| `--chotto-theme-message-right-secondary-bg` | Вторичный цвет для сообщений, располагаемых справа |
| `--chotto-theme-message-left-bg` | Фон сообщения, располагаемого слева |
| `--chotto-theme-message-left-secondary-bg` | Вторичный цвет для сообщений, располагаемых слева |
| `--chotto-theme-message-accent-line-color` | Цвет акцентного отделителя сопутствующего контента от основного сообщения |
| `--chotto-theme-message-focused-color` | Цвет выделения сообщения при поиске |
| `--chotto-theme-message-margin` | Отступ контейнера сообщения |
| `--chotto-theme-message-type-icon-bg-color` | Цвет фона для иконки типа сообщения |
| `--chotto-theme-message-type-icon-color` | Цвет иконки типа сообщения |
| `--chotto-theme-message-border-radius` | Радиус скругления углов сообщения |

### Модальные окна сообщений

| Наименование | Предназначение |
|-------|-----|
| `--chotto-theme-message-modal-padding` | Внутренний отступ от края модального окна |
| `--chotto-theme-message-modal-border-radius` | Радиус скругления углов модального окна |
| `--chotto-theme-message-modal-mask-background` | Цвет маски, окружающей модальное окно |
| `--chotto-theme-message-modal-overlay-shadow` | Настройка box-shadow для обводки модального окна |
| `--chotto-theme-message-modal-bg` | Цвет фона модального окна |


## Переменные компонентов

Каждый компонент имеет свои специфические CSS переменные с префиксом `--chotto-componentname-*`. Эти переменные можно переопределять для кастомизации отдельных компонентов.

### Примеры переменных компонентов

#### CommunicationPanel

```css
--chotto-communicationpanel-background: #ffffff;
--chotto-communicationpanel-border-color: #e5e5e5;
--chotto-communicationpanel-btn-active-color: #007CFF;
--chotto-communicationpanel-btn-hover-background: #f5f5f5;
--chotto-communicationpanel-menu-background: #ffffff;
```

#### ChatInput

```css
--chotto-chat-input-container-bg: #ffffff;
--chotto-chat-input-icon-color: #007CFF;
--chotto-chat-input-icon-color-disabled: #b4e8f9;
```

#### Tooltip

```css
--chotto-tooltip-text-color: #ffffff;
--chotto-tooltip-bg-color: #262626;
```

#### WABATemplateSelector

```css
--chotto-variable-placeholder-empty-color: #f5f5f5;
--chotto-variable-placeholder-filled-color: #e5e5e5;
```

#### WABAAttachmentSection

```css
--chotto-attachment-section-color: #f5f5f5;
--chotto-attachment-section-hover-color: #e5e5e5;
--chotto-attachment-section-error-color: #dc2626;
```

#### WABAQuickReplyButtons

```css
--chotto-quick-reply-buttons-color: #1e1e1e;
```

Полный список переменных компонентов типизирован в интерфейсах вида `ComponentNameThemeCSSVariables` в соответствующих компонентах.

## Создание собственной темы

Для создания собственной темы:

1. Определите переменные в CSS с атрибутом `data-theme`:

```css
[data-theme="my-custom-theme"] {
  --chotto-theme-primary-color: #your-color;
  --chotto-theme-secondary-color: #your-color;
  /* ... остальные переменные */
}
```

2. Используйте TypeScript типы для валидации:

```typescript
import type { ChottoThemeVariables } from '@mobilon-dev/chotto'

const myTheme: ChottoThemeVariables = {
  '--chotto-theme-primary-color': '#your-color',
  // ... остальные переменные
}
```

3. Примените тему к контейнеру:

```vue
<template>
  <div data-theme="my-custom-theme">
    <BaseContainer>
      <!-- Ваш контент -->
    </BaseContainer>
  </div>
</template>
```

## Валидация тем

Библиотека включает встроенную валидацию тем:

```bash
# Проверка консистентности тем
npm run validate-themes
```

Скрипт валидации покажет:
- ❌ Отсутствующие переменные
- ⚠️ Лишние переменные
- 📊 Статистику по темам
- 🔍 Детальную информацию

## Дополнительные ресурсы

- Полный список глобальных переменных доступен в типе `ChottoThemeVariables` из `@mobilon-dev/chotto`
- Переменные компонентов типизированы в интерфейсах вида `ComponentNameThemeCSSVariables` в соответствующих компонентах
- Примеры использования тем можно найти в [Storybook](https://mobilon-dev.github.io/chotto/)
