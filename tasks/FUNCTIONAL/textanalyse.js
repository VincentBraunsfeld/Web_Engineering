const text_span = document.getElementById('text-span');
const text_input = document.getElementById('text-input');
const text_button = document.getElementById('text-button');

const text_p = document.createElement('p');
text_p.classList.add('result');
text_span.appendChild(text_p);

text_button.addEventListener('click', () =>{
    console.log(textAna(text_input.value));
    text_p.textContent = JSON.stringify(textAna(text_input.value));
})




let text = `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plagiatsresolution</title>
</head>
<body>
<header><h2 class="field field--name-title field--type-ds field--label-hidden">Plagiatsresolution und -maßnahmen</h2>
</header>

<div class="content">

  <div
      class="paragraphs-items paragraphs-items-field-pcf-content paragraphs-items-field-pcf-content-full paragraphs-items-full">
    <div class="field field-name-field-pcf-content">
      <div class="entity entity-paragraphs-item paragraphs-item-para-text">
        <div class="field field--name-field-pf-text-wysiwyg field--type-text-long field--label-hidden">
          <p>
            <strong>Resolution zum akademischen Ethos und zu den akademischen Standards</strong></p>
          <p>
            In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die Hochschule
            Bonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmen
            einzuleiten.</p>
          <p>
            1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und
            den akademischen Standards.</p>
          <p>
            2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohl
            über den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner
            Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- und
            Denkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig
            aufgeklärt.</p>
          <p>
            3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule
            Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den
            Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die
            akademischen Standards aufgeklärt sind und diese beachten werden.</p>
          <p>
            Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.</p>
          <p>
            <strong>Eckpunkte zur Plagiatsprüfung</strong></p>
          <p>
            Der Senat empfiehlt:</p>
          <p>
            1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss fester
            Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge
            werden darauf hin geprüft und ggfs. ergänzt.</p>
          <p>
            2. Alle Abschlussarbeiten werden auf Plagiate geprüft.</p>
          <p>
            3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.</p>
          <p>
            4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der
            Nachweis in einem Gutachten reicht.</p>
          <p>
            5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat
            wie Word, OpenOffice, ...) eingereicht.</p>
          <p>
            6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur
            Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung
            freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in
            begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.</p>
          <p>
            7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule
            stichprobenartige Plagiatsprüfungen vor.</p>
          <p>
            <strong>Selbstverpflichtungserklärung der Studierenden:</strong></p>
          <p>
            Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im
            Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet
            sind.</p>
          <p>
            "Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder
            Verletzung aufgeklärt worden bin."</p>

        </div>
      </div>
    </div>
  </div>
</div>


</article>
</body>
</html>
`;
let stopwords = `ab
aber
abermaliges
abermals
abgerufen
abgerufene
abgerufener
abgerufenes
abgesehen
acht
aehnlich
aehnliche
aehnlichem
aehnlichen
aehnlicher
aehnliches
aehnlichste
aehnlichstem
aehnlichsten
aehnlichster
aehnlichstes
aeusserst
aeusserste
aeusserstem
aeussersten
aeusserster
aeusserstes
ähnlich
ähnliche
ähnlichem
ähnlichen
ähnlicher
ähnliches
ähnlichst
ähnlichste
ähnlichstem
ähnlichsten
ähnlichster
ähnlichstes
alle
allein
alleine
allem
allemal
allen
allenfalls
allenthalben
aller
allerdings
allerlei
alles
allesamt
allg
allg.
allgemein
allgemeine
allgemeinem
allgemeinen
allgemeiner
allgemeines
allgemeinste
allgemeinstem
allgemeinsten
allgemeinster
allgemeinstes
allmählich
allzeit
allzu
als
alsbald
also
am
an
and
andauernd
andauernde
andauerndem
andauernden
andauernder
andauerndes
ander
andere
anderem
anderen
anderenfalls
anderer
andererseits
anderes
anderm
andern
andernfalls
anderr
anders
anderst
anderweitig
anderweitige
anderweitigem
anderweitigen
anderweitiger
anderweitiges
anerkannt
anerkannte
anerkannter
anerkanntes
anfangen
anfing
angefangen
angesetze
angesetzt
angesetzten
angesetzter
ans
anscheinend
ansetzen
ansonst
ansonsten
anstatt
anstelle
arbeiten
auch
auf
aufgehört
aufgrund
aufhören
aufhörte
aufzusuchen
augenscheinlich
augenscheinliche
augenscheinlichem
augenscheinlichen
augenscheinlicher
augenscheinliches
augenscheinlichst
augenscheinlichste
augenscheinlichstem
augenscheinlichsten
augenscheinlichster
augenscheinlichstes
aus
ausdrücken
ausdrücklich
ausdrückliche
ausdrücklichem
ausdrücklichen
ausdrücklicher
ausdrückliches
ausdrückt
ausdrückte
ausgenommen
ausgenommene
ausgenommenem
ausgenommenen
ausgenommener
ausgenommenes
ausgerechnet
ausgerechnete
ausgerechnetem
ausgerechneten
ausgerechneter
ausgerechnetes
ausnahmslos
ausnahmslose
ausnahmslosem
ausnahmslosen
ausnahmsloser
ausnahmsloses
außen
ausser
ausserdem
außerhalb
äusserst
äusserste
äusserstem
äussersten
äusserster
äusserstes
author
autor
baelde
bald
bälde
bearbeite
bearbeiten
bearbeitete
bearbeiteten
bedarf
bedürfen
bedurfte
been
befahl
befiehlt
befiehlte
befohlene
befohlens
befragen
befragte
befragten
befragter
begann
beginnen
begonnen
behalten
behielt
bei
beide
beidem
beiden
beider
beiderlei
beides
beim
beinahe
beisammen
beispielsweise
beitragen
beitrugen
bekannt
bekannte
bekannter
bekanntlich
bekanntliche
bekanntlichem
bekanntlichen
bekanntlicher
bekanntliches
bekennen
benutzt
bereits
berichten
berichtet
berichtete
berichteten
besonders
besser
bessere
besserem
besseren
besserer
besseres
bestehen
besteht
bestenfalls
bestimmt
bestimmte
bestimmtem
bestimmten
bestimmter
bestimmtes
beträchtlich
beträchtliche
beträchtlichem
beträchtlichen
beträchtlicher
beträchtliches
betraechtlich
betraechtliche
betraechtlichem
betraechtlichen
betraechtlicher
betraechtliches
betreffend
betreffende
betreffendem
betreffenden
betreffender
betreffendes
bevor
bez
bez.
bezgl
bezgl.
bezueglich
bezüglich
bietet
bin
bis
bisher
bisherige
bisherigem
bisherigen
bisheriger
bisheriges
bislang
bisschen
bist
bitte
bleiben
bleibt
blieb
bloss
böden
boeden
brachte
brachten
brauchen
braucht
bräuchte
bringen
bsp
bsp.
bspw
bspw.
bzw
bzw.
ca
ca.
circa
da
dabei
dadurch
dafuer
dafür
dagegen
daher
dahin
dahingehend
dahingehende
dahingehendem
dahingehenden
dahingehender
dahingehendes
dahinter
damalige
damaligem
damaligen
damaliger
damaliges
damals
damit
danach
daneben
dank
danke
danken
dann
dannen
daran
darauf
daraus
darf
darfst
darin
darüber
darüberhinaus
darueber
darueberhinaus
darum
darunter
das
daß
dass
dasselbe
Dat
davon
davor
dazu
dazwischen
dein
deine
deinem
deinen
deiner
deines
dem
demgegenüber
demgegenueber
demgemaess
demgemäss
demnach
demselben
den
denen
denkbar
denkbare
denkbarem
denkbaren
denkbarer
denkbares
denn
dennoch
denselben
der
derart
derartig
derartige
derartigem
derartigen
derartiger
derem
deren
derer
derjenige
derjenigen
derselbe
derselben
derzeit
derzeitig
derzeitige
derzeitigem
derzeitigen
derzeitiges
des
deshalb
desselben
dessen
dessenungeachtet
desto
desungeachtet
deswegen
dich
die
diejenige
diejenigen
dies
diese
dieselbe
dieselben
diesem
diesen
dieser
dieses
diesseitig
diesseitige
diesseitigem
diesseitigen
diesseitiger
diesseitiges
diesseits
dinge
dir
direkt
direkte
direkten
direkter
doch
doppelt
dort
dorther
dorthin
dran
drauf
drei
dreißig
drin
dritte
drüber
drueber
drum
drunter
du
duerfte
duerften
duerftest
duerftet
dunklen
durch
durchaus
durchweg
durchwegs
dürfen
durfte
dürfte
durften
dürften
durftest
dürftest
durftet
dürftet
eben
ebenfalls
ebenso
ect
ect.
ehe
eher
eheste
ehestem
ehesten
ehester
ehestes
eigen
eigene
eigenem
eigenen
eigener
eigenes
eigenst
eigentlich
eigentliche
eigentlichem
eigentlichen
eigentlicher
eigentliches
ein
einbaün
eine
einem
einen
einer
einerlei
einerseits
eines
einfach
einführen
einführte
einführten
eingesetzt
einig
einige
einigem
einigen
einiger
einigermaßen
einiges
einmal
einmalig
einmalige
einmaligem
einmaligen
einmaliger
einmaliges
eins
einseitig
einseitige
einseitigen
einseitiger
einst
einstmals
einzig
empfunden
ende
entgegen
entlang
entsprechend
entsprechende
entsprechendem
entsprechenden
entsprechender
entsprechendes
entweder
er
ergänze
ergänzen
ergänzte
ergänzten
ergo
erhält
erhalten
erhielt
erhielten
erneut
eröffne
eröffnen
eröffnet
eröffnete
eröffnetes
erscheinen
erst
erste
erstem
ersten
erster
erstere
ersterem
ersteren
ersterer
ersteres
erstes
es
etc
etc.
etliche
etlichem
etlichen
etlicher
etliches
etwa
etwaige
etwas
euch
euer
eure
eurem
euren
eurer
eures
euretwegen
fall
falls
fand
fast
ferner
fertig
finde
finden
findest
findet
folgend
folgende
folgendem
folgenden
folgender
folgendermassen
folgendes
folglich
for
fordern
fordert
forderte
forderten
fort
fortsetzen
fortsetzt
fortsetzte
fortsetzten
fragte
frau
frei
freie
freier
freies
fuer
fuers
fünf
für
fürs
gab
gaenzlich
gaenzliche
gaenzlichem
gaenzlichen
gaenzlicher
gaenzliches
gängig
gängige
gängigen
gängiger
gängiges
ganz
ganze
ganzem
ganzen
ganzer
ganzes
gänzlich
gänzliche
gänzlichem
gänzlichen
gänzlicher
gänzliches
gar
gbr
geb
geben
geblieben
gebracht
gedurft
geehrt
geehrte
geehrten
geehrter
gefallen
gefälligst
gefällt
gefiel
gegeben
gegen
gegenüber
gegenueber
gehabt
gehalten
gehen
geht
gekommen
gekonnt
gemacht
gemaess
gemäss
gemeinhin
gemocht
genau
genommen
genug
gepriesener
gepriesenes
gerade
gern
gesagt
gesehen
gestern
gestrige
getan
geteilt
geteilte
getragen
getrennt
gewesen
gewiss
gewisse
gewissem
gewissen
gewisser
gewissermaßen
gewisses
gewollt
geworden
ggf
ggf.
gib
gibt
gilt
gleich
gleiche
gleichem
gleichen
gleicher
gleiches
gleichsam
gleichste
gleichstem
gleichsten
gleichster
gleichstes
gleichwohl
gleichzeitig
gleichzeitige
gleichzeitigem
gleichzeitigen
gleichzeitiger
gleichzeitiges
glücklicherweise
gluecklicherweise
gmbh
gottseidank
gratulieren
gratuliert
gratulierte
groesstenteils
grösstenteils
gruendlich
gründlich
gut
gute
guten
hab
habe
haben
habt
haette
haeufig
haeufige
haeufigem
haeufigen
haeufiger
haeufigere
haeufigeren
haeufigerer
haeufigeres
halb
hallo
halten
hast
hat
hätt
hatte
hätte
hatten
hätten
hattest
hattet
häufig
häufige
häufigem
häufigen
häufiger
häufigere
häufigeren
häufigerer
häufigeres
hen
her
heraus
herein
herum
heute
heutige
heutigem
heutigen
heutiger
heutiges
hier
hierbei
hiermit
hiesige
hiesigem
hiesigen
hiesiger
hiesiges
hin
hindurch
hinein
hingegen
hinlanglich
hinlänglich
hinten
hintendran
hinter
hinterher
hinterm
hintern
hinunter
hoch
höchst
höchstens
http
hundert
ich
igitt
ihm
ihn
ihnen
ihr
ihre
ihrem
ihren
ihrer
ihres
ihretwegen
ihrige
ihrigen
ihriges
im
immer
immerhin
immerwaehrend
immerwaehrende
immerwaehrendem
immerwaehrenden
immerwaehrender
immerwaehrendes
immerwährend
immerwährende
immerwährendem
immerwährenden
immerwährender
immerwährendes
immerzu
important
in
indem
indessen
Inf.
info
infolge
infolgedessen
information
innen
innerhalb
innerlich
ins
insbesondere
insgeheim
insgeheime
insgeheimer
insgesamt
insgesamte
insgesamter
insofern
inzwischen
irgend
irgendein
irgendeine
irgendeinem
irgendeiner
irgendeines
irgendetwas
irgendjemand
irgendjemandem
irgendwann
irgendwas
irgendwelche
irgendwen
irgendwenn
irgendwer
irgendwie
irgendwo
irgendwohin
ist
ja
jaehrig
jaehrige
jaehrigem
jaehrigen
jaehriger
jaehriges
jährig
jährige
jährigem
jährigen
jähriges
je
jede
jedem
jeden
jedenfalls
jeder
jederlei
jedes
jedesmal
jedoch
jeglichem
jeglichen
jeglicher
jegliches
jemals
jemand
jemandem
jemanden
jemandes
jene
jenem
jenen
jener
jenes
jenseitig
jenseitigem
jenseitiger
jenseits
jetzt
jung
junge
jungem
jungen
junger
junges
kaeumlich
kam
kann
kannst
kaum
käumlich
kein
keine
keinem
keinen
keiner
keinerlei
keines
keineswegs
klar
klare
klaren
klares
klein
kleinen
kleiner
kleines
koennen
koennt
koennte
koennten
koenntest
koenntet
komme
kommen
kommt
konkret
konkrete
konkreten
konkreter
konkretes
könn
können
könnt
konnte
könnte
konnten
könnten
konntest
könntest
konntet
könntet
kuenftig
kuerzlich
kuerzlichst
künftig
kürzlich
kürzlichst
laengst
lag
lagen
langsam
längst
längstens
lassen
laut
lediglich
leer
legen
legte
legten
leicht
leider
lesen
letze
letzte
letzten
letztendlich
letztens
letztere
letzterem
letzterer
letzteres
letztes
letztlich
lichten
liegt
liest
links
mache
machen
machst
macht
machte
machten
mag
magst
mal
man
manch
manche
manchem
manchen
mancher
mancherlei
mancherorts
manches
manchmal
mann
margin
massgebend
massgebende
massgebendem
massgebenden
massgebender
massgebendes
massgeblich
massgebliche
massgeblichem
massgeblichen
massgeblicher
mehr
mehrere
mehrerer
mehrfach
mehrmalig
mehrmaligem
mehrmaliger
mehrmaliges
mein
meine
meinem
meinen
meiner
meines
meinetwegen
meins
meist
meiste
meisten
meistens
meistenteils
meta
mich
mindestens
mir
mit
miteinander
mitgleich
mithin
mitnichten
mittels
mittelst
mitten
mittig
mitunter
mitwohl
mochte
möchte
möchten
möchtest
moechte
moeglich
moeglichst
moeglichste
moeglichstem
moeglichsten
moeglichster
mögen
möglich
mögliche
möglichen
möglicher
möglicherweise
möglichst
möglichste
möglichstem
möglichsten
möglichster
morgen
morgige
muessen
muesst
muesste
muss
müssen
musst
müßt
musste
müsste
mussten
müssten
nach
nachdem
nacher
nachher
nachhinein
nächste
nacht
naechste
naemlich
nahm
nämlich
naturgemaess
naturgemäss
natürlich
ncht
neben
nebenan
nehmen
nein
neu
neue
neuem
neuen
neuer
neuerdings
neuerlich
neuerliche
neuerlichem
neuerlicher
neuerliches
neues
neulich
neun
nicht
nichts
nichtsdestotrotz
nichtsdestoweniger
nie
niemals
niemand
niemandem
niemanden
niemandes
nimm
nimmer
nimmt
nirgends
nirgendwo
noch
noetigenfalls
nötigenfalls
nun
nur
nutzen
nutzt
nützt
nutzung
ob
oben
ober
oberen
oberer
oberhalb
oberste
obersten
oberster
obgleich
obs
obschon
obwohl
oder
oefter
oefters
off
offenkundig
offenkundige
offenkundigem
offenkundigen
offenkundiger
offenkundiges
offensichtlich
offensichtliche
offensichtlichem
offensichtlichen
offensichtlicher
offensichtliches
oft
öfter
öfters
oftmals
ohne
ohnedies
online
paar
partout
per
persoenlich
persoenliche
persoenlichem
persoenlicher
persoenliches
persönlich
persönliche
persönlicher
persönliches
pfui
ploetzlich
ploetzliche
ploetzlichem
ploetzlicher
ploetzliches
plötzlich
plötzliche
plötzlichem
plötzlicher
plötzliches
pro
quasi
reagiere
reagieren
reagiert
reagierte
recht
rechts
regelmäßig
reichlich
reichliche
reichlichem
reichlichen
reichlicher
restlos
restlose
restlosem
restlosen
restloser
restloses
richtiggehend
richtiggehende
richtiggehendem
richtiggehenden
richtiggehender
richtiggehendes
rief
rund
rundheraus
rundum
runter
sage
sagen
sagt
sagte
sagten
sagtest
sagtet
samt
sämtliche
sang
sangen
sattsam
schätzen
schätzt
schätzte
schätzten
scheinbar
scheinen
schlechter
schlicht
schlichtweg
schließlich
schlussendlich
schnell
schon
schreibe
schreiben
schreibens
schreiber
schwerlich
schwerliche
schwerlichem
schwerlichen
schwerlicher
schwerliches
schwierig
sechs
sect
sehe
sehen
sehr
sehrwohl
seht
sei
seid
seien
seiest
seiet
sein
seine
seinem
seinen
seiner
seines
seit
seitdem
seite
seiten
seither
selbe
selben
selber
selbst
selbstredend
selbstredende
selbstredendem
selbstredenden
selbstredender
selbstredendes
seltsamerweise
senke
senken
senkt
senkte
senkten
setzen
setzt
setzte
setzten
sich
sicher
sicherlich
sie
sieben
siebte
siehe
sieht
sind
singen
singt
so
sobald
sodaß
soeben
sofern
sofort
sog
sogar
sogleich
solange
solc
solc hen
solch
solche
solchem
solchen
solcher
solches
soll
sollen
sollst
sollt
sollte
sollten
solltest
solltet
somit
sondern
sonst
sonstig
sonstige
sonstigem
sonstiger
sonstwo
sooft
soviel
soweit
sowie
sowieso
sowohl
später
spielen
startet
startete
starteten
statt
stattdessen
steht
steige
steigen
steigt
stellenweise
stellenweisem
stellenweisen
stets
stieg
stiegen
such
suchen
tages
tat
tät
tatsächlich
tatsächlichen
tatsächlicher
tatsächliches
tatsaechlich
tatsaechlichen
tatsaechlicher
tatsaechliches
tausend
teile
teilen
teilte
teilten
tief
titel
toll
total
trage
tragen
trägt
trotzdem
trug
tun
tust
tut
txt
übel
über
überall
überallhin
überaus
überdies
überhaupt
überll
übermorgen
üblicherweise
übrig
übrigens
ueber
ueberall
ueberallhin
ueberaus
ueberdies
ueberhaupt
uebermorgen
ueblicherweise
uebrig
uebrigens
um
ums
umso
umstaendehalber
umständehalber
unbedingt
unbedingte
unbedingter
unbedingtes
und
unerhoert
unerhoerte
unerhoertem
unerhoerten
unerhoerter
unerhoertes
unerhört
unerhörte
unerhörtem
unerhörten
unerhörter
unerhörtes
ungefähr
ungemein
ungewoehnlich
ungewoehnliche
ungewoehnlichem
ungewoehnlichen
ungewoehnlicher
ungewoehnliches
ungewöhnlich
ungewöhnliche
ungewöhnlichem
ungewöhnlichen
ungewöhnlicher
ungewöhnliches
ungleich
ungleiche
ungleichem
ungleichen
ungleicher
ungleiches
unmassgeblich
unmassgebliche
unmassgeblichem
unmassgeblichen
unmassgeblicher
unmassgebliches
unmoeglich
unmoegliche
unmoeglichem
unmoeglichen
unmoeglicher
unmoegliches
unmöglich
unmögliche
unmöglichen
unmöglicher
unnötig
uns
unsaeglich
unsaegliche
unsaeglichem
unsaeglichen
unsaeglicher
unsaegliches
unsagbar
unsagbare
unsagbarem
unsagbaren
unsagbarer
unsagbares
unsäglich
unsägliche
unsäglichem
unsäglichen
unsäglicher
unsägliches
unse
unsem
unsen
unser
unsere
unserem
unseren
unserer
unseres
unserm
unses
unsre
unsrem
unsren
unsrer
unsres
unstreitig
unstreitige
unstreitigem
unstreitigen
unstreitiger
unstreitiges
unten
unter
unterbrach
unterbrechen
untere
unterem
unteres
unterhalb
unterste
unterster
unterstes
unwichtig
unzweifelhaft
unzweifelhafte
unzweifelhaftem
unzweifelhaften
unzweifelhafter
unzweifelhaftes
usw
usw.
vergangen
vergangene
vergangener
vergangenes
vermag
vermögen
vermutlich
vermutliche
vermutlichem
vermutlichen
vermutlicher
vermutliches
veröffentlichen
veröffentlicher
veröffentlicht
veröffentlichte
veröffentlichten
veröffentlichtes
verrate
verraten
verriet
verrieten
version
versorge
versorgen
versorgt
versorgte
versorgten
versorgtes
viel
viele
vielen
vieler
vielerlei
vieles
vielleicht
vielmalig
vielmals
vier
voellig
voellige
voelligem
voelligen
voelliger
voelliges
voelligst
vollends
völlig
völlige
völligem
völligen
völliger
völliges
völligst
vollstaendig
vollstaendige
vollstaendigem
vollstaendigen
vollstaendiger
vollstaendiges
vollständig
vollständige
vollständigem
vollständigen
vollständiger
vollständiges
vom
von
vor
voran
vorbei
vorgestern
vorher
vorherig
vorherige
vorherigem
vorheriger
vorne
vorüber
vorueber
wachen
waehrend
waehrenddessen
waere
während
währenddessen
wann
war
wär
wäre
waren
wären
warst
wart
warum
was
weder
weg
wegen
weil
weiß
weit
weiter
weitere
weiterem
weiteren
weiterer
weiteres
weiterhin
weitestgehend
weitestgehende
weitestgehendem
weitestgehenden
weitestgehender
weitestgehendes
weitgehend
weitgehende
weitgehendem
weitgehenden
weitgehender
weitgehendes
welche
welchem
welchen
welcher
welches
wem
wen
wenig
wenige
weniger
wenigstens
wenn
wenngleich
wer
werde
werden
werdet
weshalb
wessen
weswegen
wichtig
wie
wieder
wiederum
wieso
wieviel
wieviele
wievieler
wiewohl
will
willst
wir
wird
wirklich
wirklichem
wirklicher
wirkliches
wirst
wo
wobei
wodurch
wofuer
wofür
wogegen
woher
wohin
wohingegen
wohl
wohlgemerkt
wohlweislich
wolle
wollen
wollt
wollte
wollten
wolltest
wolltet
womit
womoeglich
womoegliche
womoeglichem
womoeglichen
womoeglicher
womoegliches
womöglich
womögliche
womöglichem
womöglichen
womöglicher
womögliches
woran
woraufhin
woraus
worden
worin
wuerde
wuerden
wuerdest
wuerdet
wurde
würde
wurden
würden
wurdest
würdest
wurdet
würdet
www
x
z.B.
zahlreich
zahlreichem
zahlreicher
zB
zb.
zehn
zeitweise
zeitweisem
zeitweisen
zeitweiser
ziehen
zieht
ziemlich
ziemliche
ziemlichem
ziemlichen
ziemlicher
ziemliches
zirka
zog
zogen
zu
zudem
zuerst
zufolge
zugleich
zuletzt
zum
zumal
zumeist
zumindest
zunächst
zunaechst
zur
zurück
zurueck
zusammen
zusehends
zuviel
zuviele
zuvieler
zuweilen
zwanzig
zwar
zwei
zweifelsfrei
zweifelsfreie
zweifelsfreiem
zweifelsfreien
zweifelsfreier
zweifelsfreies
zwischen
zwölf`;

stopwords_arr = stopwords.split('\n');


function textAna(text){


//replace all html tags (regex)
text = text.replaceAll(/<\/?[^>]+(>|$)/g, "");
//replace all line breaks
text = text.replaceAll('\n', '');
text = text.replaceAll('.', '');
text = text.replaceAll('-', '');
text = text.replaceAll(',', '');


text_arr = text.split(' ');
text_arr = text_arr.filter(word => word !== '');

text_arr = text_arr.filter(word => !stopwords_arr.includes(word));

let words = [];

text_arr.forEach(word => {
    if (!words.includes(word)) words.push(word);
});

//all pairs with occurrence
let result = [];
words.forEach(word => {
    let counter = 0;
    let obj = {};
    for (let w of text_arr) {
        if (w == word) {
            counter++;
        }
    }
    obj[word] = counter;
    result.push(obj);
});
    if(result.length < 4) return result;

    return helper(result);
}

//bestimmt die drei Wörter, die am häufigsten vorkommen
function helper(arr) {
    res = [];
    let i = 0
    while (i < 3) {

        const temp = arr.filter(obj =>  !res.includes(obj))
            .reduce((a, b) => Math.max(a, Object.values(b)[0]), 0);

        res.push(arr.filter(obj => Object.values(obj)[0] === temp)[0]);
        i++;
    }
    return res;

}

console.log(textAna('und'));






