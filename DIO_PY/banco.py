# variáveis
saldo = 0
limite = 500
extrato = ""
saques = 0
LIMITE_SAQUES = 3

menu = """
[1] Depositar
[2] Sacar
[3] Extrato
[4] Sair

"""
while True:
    op = input(menu)
    if op = 1:
        valor = float(input("Qual o valor de depósito? "))
        if  valor > 0:
            saldo += valor
        else:
            print("ERRO, valor informado não pode ser negativo")
    elif op = 2:
        valor = float(input("Qual o valor de saque? "))
        if valor > saldo:
            print("Você não tem saldo o suficiente!")
        elif valor > limite:
            print("O valor de saque excede o limite!")
        elif saques >= LIMITE_SAQUES:
            print("Você atingiu o número máximo de saques!")
        elif valor > 0:
            saldo -= valor
            saques += 1
        else:
            print("Valor informado é inválido!")
    elif op = 3:
        print(f"\nSaldo: R$ {saldo:.2f}")
    elif op = 4:
        break
    else: 
        print("Erro, opção inválida")




