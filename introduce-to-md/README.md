# Git Commands Cheatsheet

В этом документе представлен перечень базовых команд Git и их флагов.

## Основные команды

### Инициализация и клонирование репозитория
- `git init` — инициализация нового локального репозитория.
- `git clone <url>` — клонирование удалённого репозитория на локальный компьютер.
  - Флаг `--depth <n>` — клонирование с ограничением истории до указанного числа коммитов.

### Работа с индексом и коммитами
- `git add <файл>` — добавление файла в индекс для следующего коммита.
  - Флаг `-A` или `--all` — добавление всех изменений.
- `git commit -m "Сообщение"` — создание коммита с сообщением.
  - Флаг `--amend` — изменение последнего коммита.

### Просмотр истории
- `git log` — просмотр истории коммитов.
  - Флаг `--oneline` — вывод истории в сокращённом виде (одна строка на коммит).
  - Флаг `--graph` — отображение графа веток.
- `git status` — отображение состояния репозитория (изменения, индекс, необработанные файлы).

### Ветвление и работа с ветками
- `git branch` — просмотр списка веток.
  - Флаг `-a` — отображение всех веток, включая удалённые.
- `git checkout <ветка>` — переключение на указанную ветку.
  - Флаг `-b` — создание и переключение на новую ветку.
- `git merge <ветка>` — слияние указанной ветки в текущую.

### Работа с удалённым репозиторием
- `git remote add <имя> <url>` — добавление удалённого репозитория.
- `git fetch <имя>` — получение изменений из удалённого репозитория.
- `git pull <имя> <ветка>` — получение и слияние изменений из удалённого репозитория.
- `git push <имя> <ветка>` — отправка изменений в удалённый репозиторий.

### Отмена изменений
- `git reset <файл>` — отмена добавления файла в индекс.
  - Флаг `--hard` — сброс состояния репозитория до указанного коммита без сохранения изменений.
  - Флаг `--soft` — сброс до указанного коммита с сохранением изменений в рабочем каталоге.
- `git revert <хеш>` — отмена указанного коммита путём создания нового коммита.

### Дополнительные команды
- `git stash` — временное сохранение изменений без коммита.
  - Флаг `pop` — восстановление сохранённых изменений и их удаление из списка.
