function updateTime() {
    setInterval(() => {
        const now = new Date()
        const hours = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const sec = String(now.getSeconds()).padStart(2, '0');
        const msec = String(now.getUTCMilliseconds()).padStart(3, '00');
        document.getElementById('clock').textContent = `${hours}:${mins}:${sec}:${msec}`
    }, 1);
}


updateTime()