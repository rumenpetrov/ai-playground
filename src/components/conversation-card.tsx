import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';

interface Props {
  id: string;
  name: string;
}

const ConversationCard = (props: Props) => {
  const { id, name } = props;

  const handleDelete = async () => {
    const response = await fetch(`/api/conversations/delete/${id}`, {
      method: 'DELETE',
    });

    if (response?.redirected) {
      window.location.assign(response.url);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <div className="grid grid-cols-2 gap-2">
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>

          <Button variant="secondary" asChild>
            <a href={`/conversations/rename/${id}`}>Rename</a>
          </Button>
        </div>

        <Button asChild>
          <a href={`/conversations/${id}`}>Chat</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ConversationCard;
