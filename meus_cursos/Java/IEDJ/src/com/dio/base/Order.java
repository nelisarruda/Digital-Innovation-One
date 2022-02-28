package com.dio.base;

import java.math.BigDecimal;

/**
 * @author Nelis Junior
 * @version 1.0.0
 * @see Bigdecimal
 * @since Release 1.0.0
 */

public class Order {

    private final String code;
    private final int totalValue;

    /**
     * Construtor da classe
     * 
     * @param code       Codigo do pedido
     * @param totalValue Valor total do pedido
     */

    public Order(String code, int totalValue) {
        this.code = code;
        this.totalValue = totalValue;
    }

    /**
     * Calcula o valor de acordo com o valor do pedido. Se o valor for maior que R$
     * 100,00 uma taxa será cobrada.
     * 
     * @return Valor total do pedido com as taxas
     * @throws RuntimeEception Se o pedido for um valor negativo.
     */

    /*
     * public double calculateFee() {
     * switch (totalValue) {
     * case 100:
     * return totalValue * 0.99;
     * case 200:
     * return totalValue * 1.99;
     * default:
     * return totalValue;
     * }
     * 
     * }
     */

    /*
     * @Override
     * public String toString() {
     * return "Order={" +
     * "code=" + code + "'" +
     * "}";
     * }
     */

    /*
     * public double calculateFee() {
     * if (totalValue > 100) {
     * return totalValue * 0.99;
     * } else{
     * return totalValue;
     * 
     * }
     * }
     */

}