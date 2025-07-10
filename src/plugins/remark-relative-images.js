import { visit } from 'unist-util-visit';

export function remarkRelativeImages() {
  return (tree) => {
    visit(tree, 'html', (node) => {
      if (node.value && node.value.includes('<img')) {
        // Transform relative paths in HTML img tags
        node.value = node.value.replace(
          /src="\.\.\/assets\/([^"]+)"/g,
          'src="/src/content/assets/$1"'
        );
      }
    });
  };
}