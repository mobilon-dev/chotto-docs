# Начало работы

Здесь описывается процесс установки библиотеки и краткое руководство для последующего использования

## Требования

- Node.js
- Текстовый редактор и интерфейс командной строки (например, VSCode)
- Браузер, поддерживающий JS

## Установка

Для установки библиотеки введите в командной строке:

> npm install @mobilon-dev/chotto

## Применение в проекте

Библиотека Chotto предоставляет следующую структуру для построения чата:

```
.
└─ Container
   └─ Layout
      ├─ колонка N 
      ├─ ...
      └─ колонка M       
```

Основными элементами структуры являются:

- container (контейнер, оборачивающий всё приложение)
  - base - статичный, встраиваемый в имеющуюся страницу. Наполнение контейнера осуществляется через слот #default.
  - float - в виде диалогового окна. Наполнение контейнера осуществляется через слот #default, также существует возможность добавить триггеры для пользовательских событий в заголовке окна через слот #controls.

- layout (разметка контейнера по колонкам)
  - feed разметка - одна колонка на весь контейнер. Колонка доступна через слот #default.
  - base разметка - две колонки, занимающие пространство 30%/70%. Колонки доступны через слоты #first-col, #second-col.
  - extended разметка, включая подвид adaptive extended - три колонки, занимающие пространство min/min/70%. Колонки доступны через слоты #first-col, #second-col, #third-col.

Каждую колонку возможно наполнить различными компонентами

::: tip Может пригодиться

Существует также подвид layout - chat wrapper. В случае, если вашему чату необходимо обеспечить вызов дополнительной сайд-панели с возможной информацией, действиями и прочим, вы можете применить chat wrapper. Для этого необходимо 

:::

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
