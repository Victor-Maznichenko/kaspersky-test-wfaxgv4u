# 📦 News Snippet Component (Intern Project)

**Цель**: Реализовать React‑компонент отображения блока новости по макету дизайнера

---

### 🎯 Задачи проекта

1. Создать компонент `<NewsSnippet />` на основе предоставленного скриншота
2. Передать все данные через `props`, описанные в интерфейсе `IData_SnippetNews`
3. Добиться максимального соответствия дизайну (шрифты, отступы, цвета)
4. Дополнительно (по желанию):

   - Реализовать логику работы с данными (сортировка, фильтрация)
   - Оптимизировать рендеринг и стили

---

### 🛠 Технологии

- **Обязательные**: JavaScript, HTML, CSS, React, Ant Design
- **Желательные**: TypeScript, SCSS, Redux/MobX/Effector, Highcharts

---

### 🚀 Установка и запуск

```
# Клонировать репозиторий
git clone <URL>
cd your-project-folder

# Установить зависимости
npm install

# Запустить локально
npm start
```

Проект откроется в браузере по адресу `http://localhost:3000`.

---

### 🧩 Структура компонента

- `**NewsSnippet.tsx**` — главный компонент блока новости
- `**NewsSnippet.module.scss**` или `**NewsSnippet.css**` — стили
- `**interfaces.ts**` — описание `IData_SnippetNews`, `IData_TagItem`, `IData_TrafficItem`

### 📑 Props

```
interface NewsSnippetProps {
  data: IData_SnippetNews;
}
```

| Поле       | Тип                   | Описание                    |
| ---------- | --------------------- | --------------------------- |
| ID         | number                | Идентификатор новости       |
| TI         | string                | Заголовок                   |
| AB         | string                | Содержимое (аннотация)      |
| URL        | string                | Ссылка на полную новость    |
| DOM        | string                | Домен источника             |
| DP         | string (ISO datetime) | Дата и время публикации     |
| LANG       | string                | Язык новости                |
| REACH      | number                | Охват                       |
| KW         | IData_TagItem[]       | Ключевые слова              |
| AU         | string[]              | Авторы                      |
| CNTR       | string                | Страна                      |
| CNTR_CODE  | string                | Код страны                  |
| SENT       | string                | Сентимент                   |
| TRAFFIC    | IData_TrafficItem[]   | Трафик по странам           |
| FAV        | string                | URL иконки сайта            |
| HIGHLIGHTS | string[]              | Выделенные фрагменты текста |

---

### 🗂 Пример данных

```
{
  "ID": 260855433,
  "TI": "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones",
  "AB": "Mobile bankers left vulnerable: ...",
  "URL": "https://...",
  "DP": "2025-03-06T21:00:00",
  ...
}
```

---

### 📐 Макет

В проекте в папке `/design` лежит скриншот макета `news-snippet.png`. Используйте его для точного воспроизведения стилей.
![Макет блока новости](design/Screenshot_1.png)

---

### 💡 Рекомендации

- Используйте Ant Design компоненты (Card, Tag, Tooltip, Typography)
- Для стилей можно применять SCSS-модули
- Код должен быть компактным и читаемым
- Оптимизируйте повторные вычисления (useMemo, React.memo)

---

### 🤝 Как сдавать

1. Создайте публичный репозиторий на GitHub
2. Разместите код и README.md
3. Отправьте ссылку на репозиторий
