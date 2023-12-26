import Anchor from './anchor';
import { Badge } from './ui/badge';

export default function ProjectBadge({ title }: { title: string }) {
  return (
    <Anchor href={`https://github.com/saadfrhan/${title}`}>
      <Badge>{title}</Badge>
    </Anchor>
  );
}
