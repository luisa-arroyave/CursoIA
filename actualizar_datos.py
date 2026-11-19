"""Actualiza el JSON incorporado en index.html sin dependencias externas."""
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parent
data = json.loads((root / "datos.json").read_text(encoding="utf-8-sig"))
if not isinstance(data.get("platforms"), list):
    raise ValueError("datos.json debe contener una lista platforms.")
html_path = root / "index.html"
html = html_path.read_text(encoding="utf-8")
embedded = json.dumps(data, ensure_ascii=False, indent=2).replace("</", "<\\/")
pattern = r'(<script type="application/json" id="platform-data">).*?(</script>)'
updated, count = re.subn(pattern, lambda match: match[1] + embedded + match[2], html, count=1, flags=re.S)
if count != 1:
    raise ValueError("No se encontró el bloque de datos en index.html.")
html_path.write_text(updated, encoding="utf-8")
print("Datos incorporados actualizados. Revisa también matriz, filtros y recomendaciones si cambiaron capacidades o planes.")
