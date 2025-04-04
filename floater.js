
                class FloaterButton {
                    constructor() {
                        this.buttonId = 'JR61733';
                        this.popupId = 'JR28243';
                        this.tooltipText = 'Speed Test';
                        this.iframeSrc = 'https://fast.com';
                        this.buttonImage = 'https://ip.jessejesse.com/icon.png';
                        this.createButton();
                        this.createPopup();
                    }

                    createButton() {
                        this.button = document.createElement('div');
                        this.button.id = this.buttonId;
                        this.button.className = 'floating-button';
                        this.button.style.backgroundImage = `url(${this.buttonImage})`;

                        const tooltip = document.createElement('div');
                        tooltip.className = 'tooltip';
                        tooltip.innerText = this.tooltipText;
                        this.button.appendChild(tooltip);

                        document.body.appendChild(this.button);

                     
                        this.makeDraggable(this.button);

                        this.button.addEventListener('mouseenter', () => tooltip.style.display = 'block');
                        this.button.addEventListener('mouseleave', () => tooltip.style.display = 'none');
                        this.button.addEventListener('click', () => {
                            document.getElementById(this.popupId).style.display = 'block';
                        });
                    }

                    makeDraggable(element) {
                        let offsetX, offsetY;

                        element.addEventListener('mousedown', (e) => {
                            offsetX = e.clientX - element.getBoundingClientRect().left;
                            offsetY = e.clientY - element.getBoundingClientRect().top;

                            function mouseMoveHandler(e) {
                                element.style.left = `${e.clientX - offsetX}px`;
                                element.style.top = `${e.clientY - offsetY}px`;
                            }

                            function mouseUpHandler() {
                                document.removeEventListener('mousemove', mouseMoveHandler);
                                document.removeEventListener('mouseup', mouseUpHandler);
                            }

                            document.addEventListener('mousemove', mouseMoveHandler);
                            document.addEventListener('mouseup', mouseUpHandler);
                        });
                    }

                    createPopup() {
                        this.popup = document.createElement('div');
                        this.popup.id = this.popupId;
                        this.popup.className = 'popup';
                        this.popup.innerHTML = `
                            <button onclick="this.parentElement.style.display='none'">&times;</button>
                            <iframe src="${this.iframeSrc}"></iframe>
                        `;
                        document.body.appendChild(this.popup);
                    }
                }

                new FloaterButton();
            