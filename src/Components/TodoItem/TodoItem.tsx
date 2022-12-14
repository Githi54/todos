import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo: { title } }) => {
  return (
    <p className="lead fw-normal mb-0">
      {title}
    </p>
  );
};
