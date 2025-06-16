import { Box, List } from '@chakra-ui/react';

interface FootnotesProps {
  notes: { id: string; text: string }[];
}

export function Footnotes({ notes }: FootnotesProps) {
  return (
    <Box mt={10} fontSize="sm">
      <List.Root as="ol" pl={5}>
        {notes.map((note) => (
          <List.Item key={note.id} id={`footnote-${note.id}`}>
            {note.text}
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
}
