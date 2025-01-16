import logging
import time

from helpermodules.messaging import MessageType
from helpermodules.pub import Pub


log = logging.getLogger(__name__)


class ImportErrorContext:
    def __init__(self):
        pass

    def __enter__(self):
        return None

    def __exit__(self, exception_type, exception, exception_traceback) -> bool:
        if isinstance(exception, ModuleNotFoundError):
            try:
                msg = ("Importfehler: Das Python-Modul " + exception.args[0].split("'")[1] + " wurde nicht gefunden." +
                       " Bitte sicherstellen, dass diese openWB eine Verbindung zum Internet besitzt. Beim nächsten " +
                       "Neustart wird versucht, fehlende Software-Pakete zu installieren.")
            except IndexError:
                msg = "Importfehler: " + str(exception)
            # pub_system_message() publlished an openWB/set/, dass wird beim Starten gelöscht
            log.exception(msg)
            now = time.time()
            message_payload = {
                "source": "command",
                "type": MessageType.ERROR.value,
                "message": msg,
                "timestamp": int(now)
            }
            Pub().pub(f'openWB/system/messages/{(now * 1000):.0f}', message_payload)
        return True
