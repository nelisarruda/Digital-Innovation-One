# Desenvolvimento para Internet e Banco de Dados com Python e Django

## Pycharm
- IDE para desenvolvimento Python
- Robusta e torna o desenvolvimento muito mais rápido
- Possui versão paga e gratuíta (Community)
- https://www.jetbrains.com/pycharm/



<details><summary>Código</summary>
<p>

```py
python -m pip install --upgrade pip

# Criar ambiente virtual
python -m venv .\.virtualenvs\hello_django

# Ativar ambiente virtual
.\.virtualenvs\hello_django\Scripts\activate
#Instala o Django no ambiente virtual
pip install django
# Cria um projeto
django-admin startproject hello_django
#Abre pasta do projeto
cd .\hello_django\

pip freeze

```
</p>
</details>


- Caso tenha problema com execução de script no Windows, dê uma liga em: https://docs.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7