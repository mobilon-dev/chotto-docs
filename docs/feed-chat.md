---
outline: 'deep'

---

# Одна колонка в чате

Чат такого формата является наиболее лаконичным из возможных и занимает меньше всего места. Применений для чата в одну колонку шириной множество: встраивание в имеющиеся приложения для оставления обратной связи, заявок и прочего, интеграция с чат-ботом, форма быстрого ответа и различные иные задачи. Поскольку в этой разметке всего одна колонка наиболее уместно разместить в ней основной компонент чата [Feed](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-feed--docs) и поле ввода [ChatInput](https://mobilon-dev.github.io/chotto/?path=/docs/compounds-chatinput--docs).

При желании интерфейс можно дополнить информацией о чате, кнопками для действий и иными компонентами из [storybook](https://mobilon-dev.github.io/chotto/).

Ниже представлен пример одноколоночного чата с минимальным набором функций: пользователь может только набирать сообщение, прикрепить файл и выбрать эмодзи в заранее предопределённый чат.

<img src="/feed_new.png" alt="Изображение" class="image-with-shadow" />

<style>
.image-with-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 13px 13px 0 0;
}

.dark .image-with-shadow {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15), 
              0 2px 6px rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05);
}
</style>

## Структура кода типового чата в feed layout

```vue
<template>
  <FloatContainer>
    <FeedLayout>
      <template #default>
        <chat-wrapper>
          <template #default>
            <ThemeMode />
            <Feed />
            <ChatInput>
              <template #buttons>
                <FileUploader />
                <ButtonEmojiPicker />
                <!--Возможны дополнения-->
              </template>
            </ChatInput>
          </template>
        </chat-wrapper>
      </template>
    </FeedLayout>
  </FloatContainer>
</template>
```