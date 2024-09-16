def adicionar(x, y):
    return x + y

def subtrair(x, y):
    return x - y

def multiplicar(x, y):
    return x * y

def dividir(x, y):
    if y == 0:
        return "Erro: Divisão por zero!"
    return x / y

def calculadora():
    print("Selecione a operação:")
    print("1. Adicionar")
    print("2. Subtrair")
    print("3. Multiplicar")
    print("4. Dividir")

    escolha = input("Digite a escolha (1/2/3/4): ")

    if escolha in ['1', '2', '3', '4']:
        num1 = float(input("Digite o primeiro número: "))
        num2 = float(input("Digite o segundo número: "))

        if escolha == '1':
            print(f"Resultado: {adicionar(num1, num2)}")
        elif escolha == '2':
            print(f"Resultado: {subtrair(num1, num2)}")
        elif escolha == '3':
            print(f"Resultado: {multiplicar(num1, num2)}")
        elif escolha == '4':
            print(f"Resultado: {dividir(num1, num2)}")
    else:
        print("Escolha inválida!")

if __name__ == "__main__":
    calculadora()