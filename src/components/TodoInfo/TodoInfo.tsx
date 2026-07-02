import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/todo';
import { User } from '../../types/user';
import { UserInfo } from '../UserInfo/UserInfo';

// Цей тип описує об'єкт todo, який також містить вкладені дані користувача.
type TodoWithUser = Todo & { user?: User };

type TodoInfoProps = {
  todo: TodoWithUser;
};

export const TodoInfo = ({ todo }: TodoInfoProps) => {
  return (
    <article
      data-id={todo.id}
      className={classNames('TodoInfo', { 'TodoInfo--completed': todo.completed })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
