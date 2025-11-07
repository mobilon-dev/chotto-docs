---
outline: deep
---

# Themes

The Chotto library uses a flexible theme system for customizing the interface appearance. The system supports several ready-made themes and allows creating custom themes through CSS variables.

## Available Themes

The library includes four ready-made themes:

- **Default** (light) — default light theme
- **Dark** — dark theme with neutral colors
- **Green** — green theme with emerald accents
- **Mobilon1** — Mobilon brand theme

## Importing Themes

### Basic Import

```javascript
// Import main library styles
import '@mobilon-dev/chotto/style.css'
```

### Import Specific Theme

If you need a specific theme, you can import separately:

```javascript
import '@mobilon-dev/chotto/themes/default.css'
import '@mobilon-dev/chotto/themes/dark.css'
import '@mobilon-dev/chotto/themes/green.css'
import '@mobilon-dev/chotto/themes/mobilon1.css'
```

## Variable System

The library uses a two-level CSS variable system:

### 1. Global Theme Variables (`--chotto-theme-*`)

Global variables affect the entire chat interface. They are defined through the `data-theme` attribute:

```css
[data-theme="default"] {
  /* Main colors */
  --chotto-theme-primary-color: #ffffff;
  --chotto-theme-secondary-color: #faf6f4;
  --chotto-theme-tertiary-color: #a3a3a3;
  
  /* Text colors */
  --chotto-theme-primary-text-color: #1e1e1e;
  --chotto-theme-secondary-text-color: #5f5f5f;
  
  /* Typography */
  --chotto-theme-font-family: 'Montserrat', sans-serif;
  --chotto-theme-header-font-size: 20px;
  --chotto-theme-text-font-size: 15px;
  
  /* Messages */
  --chotto-theme-message-right-bg: #d1fae5;
  --chotto-theme-message-left-bg: #e5e5e5;
  
  /* ... and other variables (82 variables total) */
}
```

### 2. Component Variables (`--chotto-componentname-*`)

Each component has its own CSS variables that can be overridden in your project. For example, for the `CommunicationPanel` component:

```css
[data-theme="default"] {
  /* CommunicationPanel component variables */
  --chotto-communicationpanel-background: #ffffff;
  --chotto-communicationpanel-border-color: #e5e5e5;
  --chotto-communicationpanel-btn-active-color: #007CFF;
  --chotto-communicationpanel-btn-hover-background: #f5f5f5;
  --chotto-communicationpanel-menu-background: #ffffff;
  /* ... and other component variables */
}
```

**Benefits of the two-level system:**
- ✅ Flexible customization of individual components
- ✅ All variables have fallback values
- ✅ Can use global theme variables: `var(--chotto-theme-primary-color)`
- ✅ Full typing through TypeScript interfaces

**Available `data-theme` values:** `"default"`, `"dark"`, `"green"`, `"mobilon1"`

## TypeScript Types

All global theme variables are typed through the `ChottoThemeVariables` interface:

```typescript
import type { ChottoThemeVariables } from '@mobilon-dev/chotto'

// Using the type for variable validation
const themeVariables: ChottoThemeVariables = {
  '--chotto-theme-primary-color': '#ffffff',
  '--chotto-theme-secondary-color': '#faf6f4',
  // ... rest of variables
}
```

Component variables are typed in interfaces of the form `ComponentNameThemeCSSVariables` in the corresponding components.

## Global Theme Variables

### Main Colors

| Name | Purpose |
|-------|-----|
| `--chotto-theme-primary-color` | Main color used in chat (most often background) |
| `--chotto-theme-secondary-color` | Secondary color |
| `--chotto-theme-tertiary-color` | Tertiary color |
| `--chotto-theme-quaternary-color` | Quaternary color |
| `--chotto-theme-quinary-color` | Quinary color |
| `--chotto-theme-primary-text-color` | Main text color |
| `--chotto-theme-secondary-text-color` | Additional text color |

### Semantic Colors

| Name | Purpose |
|-------|-----|
| `--chotto-theme-shadow-color` | Strong shadow color |
| `--chotto-theme-shadow-light-color` | Shadow outline color for elements |
| `--chotto-theme-status-color-received` | Message status color — delivered to recipient |
| `--chotto-theme-status-color-read` | Message status color — read by recipient |
| `--chotto-theme-status-color-error` | Message status color — send error |
| `--chotto-theme-status-color-pending` | Message status color — sending |

### Typography

| Name | Purpose |
|-------|-----|
| `--chotto-theme-font-family` | Font family for entire chat |
| `--chotto-theme-header-font` | Header font |
| `--chotto-theme-header-font-size` | Header font size |
| `--chotto-theme-header-font-color` | Header font color |
| `--chotto-theme-title-font-size` | Accent label font size |
| `--chotto-theme-text-font-size` | Main text font size |
| `--chotto-theme-additional-text-font-size` | Additional text font size |
| `--chotto-theme-small-text-font-size` | Tertiary informational text font size |
| `--chotto-theme-context-menu-font-size` | Context menu text font size |
| `--chotto-theme-header-font-weight` | Header font weight |
| `--chotto-theme-title-font-weight` | Accent label font weight |
| `--chotto-theme-default-font-weight` | Default font weight for entire chat |
| `--chotto-theme-small-text-font-weight` | Small text font weight |

### Icon Sizes

| Name | Purpose |
|-------|-----|
| `--chotto-theme-button-icon-size` | Button icon size |
| `--chotto-theme-text-icon-size` | Icon size comparable to main text |
| `--chotto-theme-small-text-icon-size` | Secondary icon size |
| `--chotto-theme-avatar-small-size` | Small avatar diameter |
| `--chotto-theme-avatar-medium-size` | Medium avatar diameter |

### Buttons

| Name | Purpose |
|-------|-----|
| `--chotto-theme-button-color-active` | Active button color |
| `--chotto-theme-button-color-hover` | Button color on mouse hover |
| `--chotto-theme-button-color-disabled` | Disabled button color |
| `--chotto-theme-action-button-color-active` | Active action button color |
| `--chotto-theme-action-button-color-hover` | Action button color on hover |
| `--chotto-theme-action-button-color-disabled` | Disabled action button color |

### Element States

| Name | Purpose |
|-------|-----|
| `--chotto-theme-item-background-color-focus` | Selected tile element background color |
| `--chotto-theme-item-background-color-hover` | Tile element background color on mouse hover |
| `--chotto-theme-item-border-color` | Border color for internal chat elements |
| `--chotto-theme-unread-background-color` | Unread messages indicator background color |
| `--chotto-theme-unread-text-color` | Unread messages indicator label color |

### Borders

| Name | Purpose |
|-------|-----|
| `--chotto-theme-border` | Thickness, line type and color for container and layout borders |

### Scrollbar

| Name | Purpose |
|-------|-----|
| `--chotto-theme-scrollbar-bg` | Scrollbar color |
| `--chotto-theme-scrollbar-thumb-bg` | Scrollbar thumb color showing current page position |

## Messages

### General Message Variables

| Name | Purpose |
|-------|-----|
| `--chotto-theme-message-right-bg` | Background of message positioned on the right |
| `--chotto-theme-message-right-secondary-bg` | Secondary color for messages positioned on the right |
| `--chotto-theme-message-left-bg` | Background of message positioned on the left |
| `--chotto-theme-message-left-secondary-bg` | Secondary color for messages positioned on the left |
| `--chotto-theme-message-accent-line-color` | Accent separator color for accompanying content from main message |
| `--chotto-theme-message-focused-color` | Message highlight color when searching |
| `--chotto-theme-message-margin` | Message container margin |
| `--chotto-theme-message-type-icon-bg-color` | Message type icon background color |
| `--chotto-theme-message-type-icon-color` | Message type icon color |
| `--chotto-theme-message-border-radius` | Message corner radius |

### Message Modal Windows

| Name | Purpose |
|-------|-----|
| `--chotto-theme-message-modal-padding` | Internal padding from modal window edge |
| `--chotto-theme-message-modal-border-radius` | Modal window corner radius |
| `--chotto-theme-message-modal-mask-background` | Mask color surrounding modal window |
| `--chotto-theme-message-modal-overlay-shadow` | box-shadow setting for modal window outline |
| `--chotto-theme-message-modal-bg` | Modal window background color |


## Component Variables

Each component has its own specific CSS variables with the prefix `--chotto-componentname-*`. These variables can be overridden to customize individual components.

### Component Variable Examples

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

The full list of component variables is typed in interfaces of the form `ComponentNameThemeCSSVariables` in the corresponding components.

## Creating Custom Theme

To create a custom theme:

1. Define variables in CSS with the `data-theme` attribute:

```css
[data-theme="my-custom-theme"] {
  --chotto-theme-primary-color: #your-color;
  --chotto-theme-secondary-color: #your-color;
  /* ... rest of variables */
}
```

2. Use TypeScript types for validation:

```typescript
import type { ChottoThemeVariables } from '@mobilon-dev/chotto'

const myTheme: ChottoThemeVariables = {
  '--chotto-theme-primary-color': '#your-color',
  // ... rest of variables
}
```

3. Apply theme to container:

```vue
<template>
  <div data-theme="my-custom-theme">
    <BaseContainer>
      <!-- Your content -->
    </BaseContainer>
  </div>
</template>
```

## Theme Validation

The library includes built-in theme validation:

```bash
# Check theme consistency
npm run validate-themes
```

The validation script will show:
- ❌ Missing variables
- ⚠️ Extra variables
- 📊 Theme statistics
- 🔍 Detailed information

## Additional Resources

- Full list of global variables is available in the `ChottoThemeVariables` type from `@mobilon-dev/chotto`
- Component variables are typed in interfaces of the form `ComponentNameThemeCSSVariables` in the corresponding components
- Examples of theme usage can be found in [Storybook](https://mobilon-dev.github.io/chotto/)

