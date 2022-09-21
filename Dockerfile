FROM angular/ngcontainer
COPY . .
CMD ["./node_modules/.bin/ng","serve"]
 