class testVocacional { //Creación de la clase
    get program() {
        let program =
        // <--- HECHOS --->
        // enfermedades
        "enfermedad( covid)." +
        "enfermedad( bronquitis)." +
        "enfermedad( sinusitis)." +
        "enfermedad( asma)." +
        "enfermedad( tuberculosis)." +
        "enfermedad( anemia)." +
        "enfermedad( vih)." +
        "enfermedad( artritis)." +
        "enfermedad( arritmia)."+

         //% Conjunto de sintomas que se presentan en las enfermedades %
        //% El nivel de intensidad de cada sintoma se mide de la siguiente manera ---> %
        //% 1 = No presenta sintoma, 2 = baja o media, 3 = alta %
		
        //% 1.  ¿Si tiene fiebre, cuanto fue la temperatura que tenia la ultima vez que se la midio? %
        "sintomas(fiebre, covid, 3)." +
        "sintomas(fiebre, bronquitis, 1)." +
        "sintomas(fiebre, sinusitis, 1)." +
        "sintomas(fiebre, asma, 1)." +
        "sintomas(fiebre, tuberculosis, 3)." +
        "sintomas(fiebre, anemia, 1)." +
        "sintomas(fiebre, vih, 2)." +
        "sintomas(fiebre, artritis, 1)." +
        "sintomas(fiebre, arritmia, 1)." +

        //% 2. ¿Que tipo de tos tiene? %
        "sintomas(tos, covid, 3)." +
        "sintomas(tos, bronquitis, 3)." +
        "sintomas(tos, sinusitis, 2)." +
        "sintomas(tos, asma, 3)." +
        "sintomas(tos, tuberculosis, 1)." +
        "sintomas(tos, anemia, 1)." +
        "sintomas(tos, vih, 1)." +
        "sintomas(tos, artritis, 1)." +
        "sintomas(tos, arritmia, 1)." +

        //% 3. ¿Cual es el grado de dificultad al respirar? %
        "sintomas(difrespirar, covid, 3)." +
        "sintomas(difrespirar, bronquitis, 2)." +
        "sintomas(difrespirar, sinusitis, 1)." +
        "sintomas(difrespirar, asma, 3)." +
        "sintomas(difrespirar, tuberculosis, 1)." +
        "sintomas(difrespirar, anemia, 1)." +
        "sintomas(difrespirar, vih, 1)." +
        "sintomas(difrespirar, artritis, 1)." +
        "sintomas(difrespirar, arritmia, 1)." +

        //% 4. ¿Cuan cansado se siente?  %
        "sintomas(cansancio, covid, 3)." +
        "sintomas(cansancio, bronquitis, 3)." +
        "sintomas(cansancio, sinusitis, 1)." +
        "sintomas(cansancio, asma, 2)." +
        "sintomas(cansancio, tuberculosis, 3)." +
        "sintomas(cansancio, anemia, 3)." +
        "sintomas(cansancio, vih, 1)." +
        "sintomas(cansancio, artritis, 2)." +
        "sintomas(cansancio, arritmia, 2)." +

        //% 5. ¿De que color es la secresión nasal que percibe(mucosidad)? %
        "sintomas(mucosidad, covid, 2)." +
        "sintomas(mucosidad, bronquitis, 3)." +
        "sintomas(mucosidad, sinusitis, 3)." +
        "sintomas(mucosidad, asma, 1)." +
        "sintomas(mucosidad, tuberculosis, 1)." +
        "sintomas(mucosidad, anemia, 1)." +
        "sintomas(mucosidad, vih, 1)." +
        "sintomas(mucosidad, artritis, 1)." +
        "sintomas(mucosidad, arritmia, 1)." +

        //% 6. ¿Cual es la frecuencia del dolor de cabeza? %
        "sintomas(dolor_cabeza, covid, 2)." +
        "sintomas(dolor_cabeza, bronquitis, 1)." +
        "sintomas(dolor_cabeza, sinusitis, 3)." +
        "sintomas(dolor_cabeza, asma, 1)." +
        "sintomas(dolor_cabeza, tuberculosis, 1)." +
        "sintomas(dolor_cabeza, anemia, 2)." +
        "sintomas(dolor_cabeza, vih, 3)." +
        "sintomas(dolor_cabeza, artritis, 1)." +
        "sintomas(dolor_cabeza, arritmia, 1)." +

        //% 7. ¿Cual es el grado del dolor de garganta? %
        "sintomas(dolor_garganta, covid, 1)." +
        "sintomas(dolor_garganta, bronquitis, 2)." +
        "sintomas(dolor_garganta, sinusitis, 3)." +
        "sintomas(dolor_garganta, asma, 2)." +
        "sintomas(dolor_garganta, tuberculosis, 1)." +
        "sintomas(dolor_garganta, anemia, 1)." +
        "sintomas(dolor_garganta, vih, 1)." +
        "sintomas(dolor_garganta, artritis, 1)." +
        "sintomas(dolor_garganta, arritmia, 1)." +

        //% 8. ¿Cual es el grado de rapidez de su perdida de la masa muscular? %
        "sintomas(perdida_masa_muscular, covid, 1)." +
        "sintomas(perdida_masa_muscular, bronquitis, 1)." +
        "sintomas(perdida_masa_muscular, sinusitis, 1)." +
        "sintomas(perdida_masa_muscular, asma, 1)." +
        "sintomas(perdida_masa_muscular, tuberculosis, 3)." +
        "sintomas(perdida_masa_muscular, anemia, 3)." +
        "sintomas(perdida_masa_muscular, vih, 2)." +
        "sintomas(perdida_masa_muscular, artritis, 2)." +
        "sintomas(perdida_masa_muscular, arritmia, 1)." +

        //% 9. ¿Cual es el grado de sudoración? %
        "sintomas(sudoracion, covid, 2)." +
        "sintomas(sudoracion, bronquitis, 1)." +
        "sintomas(sudoracion, sinusitis, 1)." +
        "sintomas(sudoracion, asma, 1)." +
        "sintomas(sudoracion, tuberculosis, 3)." +
        "sintomas(sudoracion, anemia, 1)." +
        "sintomas(sudoracion, vih, 1)." +
        "sintomas(sudoracion, artritis, 1)." +
        "sintomas(sudoracion, arritmia, 2)." +

        //% 10. ¿Como se presenta el dolor de pecho? %
        "sintomas(dolor_pecho, covid, 1)." +
        "sintomas(dolor_pecho, bronquitis, 1)." +
        "sintomas(dolor_pecho, sinusitis, 1)." +
        "sintomas(dolor_pecho, asma, 3)." +
        "sintomas(dolor_pecho, tuberculosis, 1)." +
        "sintomas(dolor_pecho, anemia, 2)." +
        "sintomas(dolor_pecho, vih, 1)." +
        "sintomas(dolor_pecho, artritis, 1)." +
        "sintomas(dolor_pecho, arritmia, 3)." +

        //% 11. ¿Que tipo de mareo presenta? %
        "sintomas(mareos, covid, 1)." +
        "sintomas(mareos, bronquitis, 1)." +
        "sintomas(mareos, sinusitis, 1)." +
        "sintomas(mareos, asma, 1)." +
        "sintomas(mareos, tuberculosis, 2)." +
        "sintomas(mareos, anemia, 3)." +
        "sintomas(mareos, vih, 2)." +
        "sintomas(mareos, artritis, 1)." +
        "sintomas(mareos, arritmia, 3)." +

        //% 12. ¿Cual es el grado del dolor que siente en los huesos? %
        "sintomas(dolor_huesos, covid, 2)." +
        "sintomas(dolor_huesos, bronquitis, 1)." +
        "sintomas(dolor_huesos, sinusitis, 1)." +
        "sintomas(dolor_huesos, asma, 1)." +
        "sintomas(dolor_huesos, tuberculosis, 1)." +
        "sintomas(dolor_huesos, anemia, 1)." +
        "sintomas(dolor_huesos, vih, 3)." +
        "sintomas(dolor_huesos, artritis, 3)." +
        "sintomas(dolor_huesos, arritmia, 1)." +

        //% 13. ¿Cuan inflamado tiene las articulaciones? %
        "sintomas(articulacion, covid, 2)." +
        "sintomas(articulacion, bronquitis, 1)." +
        "sintomas(articulacion, sinusitis, 1)." +
        "sintomas(articulacion, asma, 1)." +
        "sintomas(articulacion, tuberculosis, 1)." +
        "sintomas(articulacion, anemia, 1)." +
        "sintomas(articulacion, vih, 2)." +
        "sintomas(articulacion, artritis, 3)." +
        "sintomas(articulacion, arritmia, 1)." +

        

        "evaluar_covid(X, Op, Enf, L, Ln) :- enfermedad( Enf), Enf = covid,"+
                                        "sintomas(X, Enf, Op),"+
                                        "L = [C1,C2,C3,C4,C5,C6,C7,C8,C9|[]],"+
                                        "Aux is (C1+Op),"+
                                        "Ln = [Aux,C2,C3,C4,C5,C6,C7,C8,C9]."+
        "evaluar_bronquitis(X, Op, Enf, L, Ln) :- enfermedad( Enf), Enf = bronquitis,"+
                                        "sintomas(X, Enf, Op),"+
                                        "L = [C1,C2,C3,C4,C5,C6,C7,C8,C9|[]],"+
                                        "Aux is (C5+Op),"+
                                        "Ln = [C1,C2,C3,C4,Aux,C6,C7,C8,C9]."+

        "evaluar_sinusitis(X, Op, Enf, L, Ln) :- enfermedad(Enf), Enf = sinusitis,"+
                                        "sintomas(X,Enf,Op),"+
                                        "L = [C1,C2,C3,C4,C5,C6,C7,C8,C9|[]],"+
                                        "Aux is (C6+Op),"+
                                        "Ln = [C1,C2,C3,C4,C5,Aux,C7,C8,C9]."+

        "evaluar_asma(X, Op, Enf, L, Ln) :- enfermedad(Enf), Enf = asma,"+
                                        "sintomas(X,Enf,Op),"+
                                        "L = [C1,C2,C3,C4,C5,C6,C7,C8,C9|[]],"+
                                        "Aux is (C2+Op),"+
                                        "Ln = [C1,Aux,C3,C4,C5,C6,C7,C8,C9]."+

        "evaluar_tuberculosis(X, Op, Enf, L, Ln) :- enfermedad(Enf), Enf = tuberculosis,"+
                                        "sintomas(X,Enf,Op),"+
                                        "L = [C1,C2,C3,C4,C5,C6,C7,C8,C9|[]],"+
                                        "Aux is (C3+Op),"+
                                        "Ln = [C1,C2,Aux,C4,C5,C6,C7,C8,C9]."+

        "evaluar_anemia(X, Op, Enf, L, Ln) :- enfermedad(Enf), Enf = anemia,"+
                                        "sintomas(X,Enf,Op),"+
                                        "L = [C1,C2,C3,C4,C5,C6,C7,C8,C9|[]],"+
                                        "Aux is (C4+Op),"+
                                        "Ln = [C1,C2,C3,Aux,C5,C6,C7,C8,C9]."+

        "evaluar_vih(X, Op, Enf, L, Ln) :- enfermedad(Enf), Enf = vih,"+
                                        "sintomas(X,Enf,Op),"+
                                        "L = [C1,C2,C3,C4,C5,C6,C7,C8,C9|[]],"+
                                        "Aux is (C7+Op),"+
                                        "Ln = [C1,C2,C3,C4,C5,C6,Aux,C8,C9]."+

        "evaluar_artritis(X, Op, Enf, L, Ln) :- enfermedad(Enf), Enf = artritis,"+
                                        "sintomas(X,Enf,Op),"+
                                        "L = [C1,C2,C3,C4,C5,C6,C7,C8,C9|[]],"+
                                        "Aux is (C8+Op),"+
                                        "Ln = [C1,C2,C3,C4,C5,C6,C7,Aux,C9]."+

        "evaluar_arritmia(X, Op, Enf, L, Ln) :- enfermedad(Enf), Enf = arritmia,"+
                                            "sintomas(X,Enf,Op),"+
                                            "L = [C1,C2,C3,C4,C5,C6,C7,C8,C9|[]],"+
                                            "Aux is (C9+Op),"+
                                            "Ln = [C1,C2,C3,C4,C5,C6,C7,C8,Aux]."+

        "evaluar_pregunta1(X, Op, L, Ln) :- Op == 1, evaluar_bronquitis(X, Op, bronquitis, L, L1), evaluar_sinusitis(X, Op, sinusitis,L1, L2), evaluar_asma(X, Op, asma, L2, L3), evaluar_anemia(X, Op, anemia, L3, L4), evaluar_artritis(X, Op, artritis, L4, L5), evaluar_arritmia(X, Op, arritmia, L5, Ln);"+
                                           "Op == 2, evaluar_vih(X, Op, vih,L, Ln);"+
										   "Op == 3, evaluar_covid(X, Op, covid, L, L1), evaluar_tuberculosis(X, Op, tuberculosis, L1, Ln)."+

        "evaluar_pregunta2(X, Op, L, Ln) :-  Op == 1, evaluar_tuberculosis(X, Op, tuberculosis, L, L1), evaluar_anemia(X, Op, anemia,L1, L2), evaluar_vih(X, Op, vih, L2, L3), evaluar_artritis(X, Op, artritis, L3, L4), evaluar_arritmia(X, Op, arritmia, L4, L5);"+
                                            "Op == 2, evaluar_sinusitis(X, Op, sinusitis, L, Ln);"+
                                            "Op == 3, evaluar_bronquitis(X, Op, bronquitis, L, L1), evaluar_asma(X, Op, asma,L1, Ln)."+

        "evaluar_pregunta3(X, Op, L, Ln) :- Op == 1, evaluar_tuberculosis(X, Op, tuberculosis, L, L1), evaluar_anemia(X, Op, anemia, L1, L2),  evaluar_sinusitis(X, Op, sinusitis, L2, L3), evaluar_artritis(X, Op, artritis, L3, L4), evaluar_arritmia(X, Op, arritmia, L4, L5), evaluar_vih(X, Op, vih, L5, Ln);"+
                                           "Op == 2, evaluar_bronquitis(X, Op, bronquitis, L, Ln);"+
                                           "Op == 3, evaluar_asma(X, Op, asma, L, L1), evaluar_covid(X, Op, covid, L1, Ln)."+

        "evaluar_pregunta4(X, Op, L, Ln) :-  Op == 1, evaluar_sinusitis(X, Op, sinusitis, L, L1), evaluar_vih(X, Op, vih, L1, Ln);"+
                                            "Op == 2, evaluar_asma(X, Op, asma, L, L1), evaluar_artritis(X, Op, artritis, L1, L2), evaluar_arritmia(X, Op, arritmia, L2, Ln);"+
                                            "Op == 3, evaluar_bronquitis(X, Op, bronquitis, L, L1), evaluar_covid(X, Op, covid, L1, L2), evaluar_anemia(X, Op, anemia, L2, L3),evaluar_tuberculosis(X, Op, tuberculosis, L3, Ln)."+

        "evaluar_pregunta5(X, Op, L, Ln) :- Op == 1, evaluar_asma(X, Op, asma, L, L1), evaluar_tuberculosis(X, Op, tuberculosis, L1, L2), evaluar_vih(X, Op, vih, L2, L3), evaluar_anemia(X, Op, anemia, L3, L4), evaluar_artritis(X, Op, artritis, L4, L5), evaluar_arritmia(X, Op, arritmia, L5, Ln);"+
                                           "Op == 2, evaluar_covid(X, Op, covid, L, Ln);"+
                                           "Op == 3, evaluar_bronquitis(X, Op, bronquitis, L, L1), evaluar_sinusitis(X, Op, sinusitis, L1, Ln)."+

        "evaluar_pregunta6(X, Op, L, Ln) :-  Op == 1, evaluar_bronquitis(X, Op, bronquitis, L, L1), evaluar_tuberculosis(X, Op, tuberculosis, L1, L2), evaluar_asma(X, Op, asma, L2, L3), evaluar_artritis(X, Op, artritis, L3, L4), evaluar_arritmia(X, Op, arritmia, L4, Ln);"+
                                            "Op == 2, evaluar_covid(X, Op, covid, L, L1), evaluar_anemia(X, Op, anemia, L1, Ln);"+
                                            "Op == 3,  evaluar_sinusitis(X, Op, sinusitis, L, L1), evaluar_vih(X, Op, vih, L1, Ln)."+

        "evaluar_pregunta7(X, Op, L, Ln) :- Op == 1, evaluar_anemia(X, Op, anemia, Ln, L1), evaluar_covid(X, Op, covid, L1, L2), evaluar_tuberculosis(X, Op, tuberculosis, L2, L3), evaluar_artritis(X, Op, artritis, L3, L4), evaluar_arritmia(X, Op, arritmia, L4, L5), evaluar_vih(X, Op, vih, L5, Ln);"+
                                           "Op == 2, evaluar_bronquitis(X, Op, bronquitis, L, L1), evaluar_asma(X, Op, asma, L1, Ln);"+
                                           "Op == 3, evaluar_sinusitis(X, Op, sinusitis, L, Ln)."+

        "evaluar_pregunta8(X, Op, L, Ln) :-  Op == 1, evaluar_covid(X, Op, covid, L, L1), evaluar_bronquitis(X, Op, bronquitis, L1, L2), evaluar_sinusitis(X, Op, sinusitis, L2, L3), evaluar_asma(X, Op, asma, L3, L4), evaluar_arritmia(X, Op, arritmia, L4, Ln);"+
                                            "Op == 2, evaluar_vih(X, Op, vih, L, L1), evaluar_artritis(X, Op, artritis, L1, Ln);"+
                                            "Op == 3, evaluar_tuberculosis(X, Op, tuberculosis, L, L1), evaluar_anemia(X, Op, anemia, L1, Ln)."+

        "evaluar_pregunta9(X, Op, L, Ln) :- Op == 1, evaluar_anemia(X, Op, anemia, L, L1), evaluar_asma(X, Op, asma, L1, L2), evaluar_artritis(X, Op, artritis, L2, L3), evaluar_bronquitis(X, Op, bronquitis, L3, L4), evaluar_sinusitis(X, Op, sinusitis, L4, L5), evaluar_vih(X, Op, vih, L5, Ln);"+
                                           "Op == 2, evaluar_covid(X, Op, covid, L, L1), evaluar_arritmia(X, Op, arritmia, L1, Ln);"+
                                           "Op == 3, evaluar_tuberculosis(X, Op, tuberculosis, L, Ln)."+

         "evaluar_pregunta10(X, Op, L, Ln) :-  Op == 1, evaluar_covid(X, Op, covid, L, L1), evaluar_bronquitis(X, Op, bronquitis, L1, L2), evaluar_tuberculosis(X, Op, tuberculosis, L2, L3), evaluar_sinusitis(X, Op, sinusitis, L3, L4), evaluar_vih(X, Op, vih, L4, L5), evaluar_artritis(X, Op, artritis, L5, Ln);"+
                                              "Op == 2, evaluar_anemia(X, Op, anemia, L, Ln);"+
                                              "Op == 3, evaluar_asma(X, Op, asma, L, L1), evaluar_arritmia(X, Op, arritmia, L1, Ln)."+

         "evaluar_pregunta11(X, Op, L, Ln) :- Op == 1, evaluar_covid(X, Op, covid, L, L1), evaluar_asma(X, Op, asma, L1, L2), evaluar_bronquitis(X, Op, bronquitis, L2, L3), evaluar_sinusitis(X, Op, sinusitis, L3, L4), evaluar_artritis(X, Op, artritis, L4, Ln);"+
                                             "Op == 2, evaluar_tuberculosis(X, Op, tuberculosis, L, L1), evaluar_vih(X, Op, vih, L1, Ln);"+
                                             "Op == 3, evaluar_anemia(X, Op, anemia, L, L1),evaluar_arritmia(X, Op, arritmia,L1,Ln)."+


         "evaluar_pregunta12(X, Op, L, Ln) :-  Op == 1, evaluar_tuberculosis(X, Op, tuberculosis, L, L1), evaluar_anemia(X, Op, anemia, L1, L2), evaluar_sinusitis(X, Op, sinusitis, L2, L3), evaluar_asma(X, Op, asma, L3, L4), evaluar_bronquitis(X, Op, bronquitis, L4, L5), evaluar_arritmia(X, Op, arritmia, L5, Ln);"+
                                              "Op == 2, evaluar_covid(X, Op, covid, L, L1);"+
                                              "Op == 3, evaluar_vih(X, Op, vih, L, L1), evaluar_artritis(X, Op, artritis, L1, Ln)."+

         "evaluar_pregunta13(X, Op, L, Ln) :- Op == 1, evaluar_sinusitis(X, Op, sinusitis, L, L1), evaluar_asma(X, Op, asma, L1, L2), evaluar_bronquitis(X, Op, bronquitis,L2,L3), evaluar_tuberculosis(X, Op, tuberculosis, L3, L4), evaluar_anemia(X, Op, anemia, L4, L5), evaluar_arritmia(X, Op, arritmia,L5,Ln);"+
                                             "Op == 2, evaluar_covid(X, Op, covid, L, L1), evaluar_vih(X,Op, vih, L1, Ln);"+
                                             "Op == 3, evaluar_artritis(X,Op, artritis, L, Ln)."+

   

          "principal(ListaOp, C1, C2, C3, C4, C5, C6, C7, C8, C9) :- ListaOp = [Op1, Op2, Op3, Op4, Op5, Op6, Op7, Op8, Op9, Op10, Op11, Op12, Op13],"+
                                                                    "X1 = fiebre,"+
                                                                    "evaluar_pregunta1(X1, Op1, [0,0,0,0,0,0,0,0,0], L1),"+
                                                                    "X2 = tos,"+
                                                                    "evaluar_pregunta2(X2, Op2, L1, L2),"+
                                                                    "X3=difrespirar,"+
                                                                    "evaluar_pregunta3(X3, Op3, L2, L3),"+
                                                                    "X4=cansancio,"+
                                                                    "evaluar_pregunta4(X4, Op4, L3, L4),"+
                                                                    "X5=mucosidad,"+
                                                                    "evaluar_pregunta5(X5, Op5, L4, L5),"+
                                                                    "X6=dolor_cabeza,"+
                                                                    "evaluar_pregunta6(X6, Op6, L5, L6),"+
                                                                    "X7=dolor_garganta,"+
                                                                    "evaluar_pregunta7(X7, Op7, L6, L7),"+
                                                                    "X8=perdida_masa_muscular,"+
                                                                    "evaluar_pregunta8(X8, Op8, L7, L8),"+
                                                                    "X9=sudoracion,"+
                                                                    "evaluar_pregunta9(X9, Op9, L8, L9),"+
                                                                    "X10=dolor_pecho,"+
                                                                    "evaluar_pregunta10(X10, Op10, L9, L10),"+
                                                                    "X11=mareos,"+
                                                                    "evaluar_pregunta11(X11, Op11, L10, L11),"+
                                                                    "X12=dolor_huesos,"+
                                                                    "evaluar_pregunta12(X12, Op12, L11, L12),"+
                                                                    "X13=articulacion,"+
                                                                    "evaluar_pregunta13(X13, Op13, L12, L13)."+
                                                                    "obtener_porcentajes(L13, LP),"+
                                                                    "LP = [C1,C2,C3,C4,C5,C6,C7,C8,C9]."+
                                                                    

        "obtener_porcentajes(L, LP) :- L = [C1, C2, C3, C4, C5, C6, C7, C8,C9],"+
                                    "Total is 30,"+
                                    "X1 is ((C1/Total)*100),"+
                                    "X2 is ((C2/Total)*100),"+
                                    "X3 is ((C3/Total)*100),"+
                                    "X4 is ((C4/Total)*100),"+
                                    "X5 is ((C5/Total)*100),"+
                                    "X6 is ((C6/Total)*100),"+
                                    "X7 is ((C7/Total)*100)," +
                                    "X8 is ((C8/Total)*100),"+
                                    "X9 is ((C9/Total)*100),"+
                                    "LP = [X1,X2,X3,X4,X5,X6,X7,X8,X9].";




                                    

        return program;
    }
}