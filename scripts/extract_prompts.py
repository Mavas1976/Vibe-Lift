"""Extract the 28 prompts from the current VIBE Lift reader edition."""
import pathlib, re, json
root = pathlib.Path(__file__).resolve().parents[1]
source = (root / 'dist/downloads/handboek.md').read_text(encoding='utf-8-sig')
matches = list(re.finditer(r'^(?:\*\*|### )Opdracht (\d{2}) [—–-] (.+?)(?:\*\*)?\s*$', source, re.M))
prompts = []
for i, match in enumerate(matches):
    section = source[match.end():matches[i+1].start() if i+1 < len(matches) else len(source)]
    block = re.search(r'```text\r?\n(.*?)\r?\n```', section, re.S)
    if not block:
        raise ValueError(f'Missing text for {match[1]}')
    prompts.append({'id': int(match[1]), 'title': match[2].rstrip('*'), 'text': block[1]})
assert [p['id'] for p in prompts] == list(range(1,29)), 'Expected exactly 28 prompts'
(root / 'dist/prompts.js').write_text('export const prompts = ' + json.dumps(prompts, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
print(f'Extracted {len(prompts)} reader-edition prompts.')
