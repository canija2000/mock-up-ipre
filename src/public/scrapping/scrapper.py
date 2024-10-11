import re
import json 
import random

get = False
credits = False
cursos = []
pr = 'center;">PR</td>'
with open('rows.txt', 'r') as f:
    f = f.readlines()
    for l in range(len(f)):
        if '<td>Ingenieria</td>' in f[l]:
            get = True
        elif get:
            target = re.findall(r'<td>(.*?)</td>', f[l])
            #print(target)
            cursos.append({"sigla":target[0], "nombre": target[1]})
            get = False
        elif pr in f[l]:
            #print(f[l]) 
            credits = True
        elif credits:
            #print(f[l])
            target = re.findall(r'<td style="text-align:center;">(.*?)</td>', f[l])
            #print(target)
            cursos[-1]['creditos'] = int(target[0])
            cursos[-1]['ECA'] = round(random.random(),2)
            cursos[-1]['HSP'] = random.randint(0,20)
            cursos[-1]['TC'] = random.choice(['D1','D2','D3','D4','D5'])
            credits = False


with open('cursos.json', 'w') as f:
    json.dump(cursos, f, indent=4)

