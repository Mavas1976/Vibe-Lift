"""Compatibility entrypoint: canonical prompts now live in dist/prompts.js.
Never overwrite the enriched library from the old 28-prompt handbook.
"""
import pathlib
import subprocess
root = pathlib.Path(__file__).resolve().parents[1]
subprocess.run(["node", str(root / "scripts/sync-prompts.mjs")], cwd=root, check=True)
