// ==UserScript==
// @name Gbuttons
// @description Add buttons for Google search page
// @version 50
// @namespace   AnubisTweaks.github.io
// @author       AnubisTweaks & spmbt
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAFN++nkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAHQJJREFUeNoEwTFOwzAYgFHfIEocO/ktO1atOKkimpYDIKArEndA3ICVIyAxg5i6sSAxVYiFI7CxMTPlDB/vqaIolNb6r67rxRizVFW1aK2XsiwXrbVSWmuapkFEEBFCCOSciTHSti3KGENZltTGICJsVhHnHE3TYK1FiQjee3LOPL++cHd7yel2R0qJEALKWov3nhACqxx5ODxycX5GCAHnHMp7z3q9ZpomPn8PfB9/uNnvGYaBcRxRbdsSYySnzP3VNce3D77en+j7nq7rUF3XqZQSKSXmeWZzsmOet+ScGceRfwAAAP//TNA7TsNAFIVhV7TWRH7PtcZjS9i+PJyQRaRNkz5SGnbBGihhA4iKHomWjoKGBiHxqLOF/BQjIRZwjj79URzHR/8bZFm2N8bsjTG3UZIklGVJURR/Dbz3iAjRzMxI05TlfIGtBBHBWhvk1lrquub4YmKzXvF2d4OOGlB5niMiiBV2l9e8PD/QNE249d6jqqgqnx/vHDgwTUEcVVWFc47t1T2PT6/8fH9xdjrinAvLtm3puo6TUZlP5/R9zzAM/AIAAP//TJK9LkRRFEbnFaaYuXdyxj7nzN3jyL3jJ35DM5hCgSAhnkAxoqRQSEQpXkGh8Qqi4hmQaEVBopFISBCW4uZO9OtLvr32V6pUKuvlcrl3zv+2xhiq1SrGGLz3WGsxxiAiRFGUv7oA6vU67blxvPcYY7DWYq1FRGg0GjjnEBGszedQqtVqVKMKcRQTxzEiwkF3m6nRYUIYYHF2if7+QFG/CBtj8rD0Cd57nHMkSUJTm3T39jk9O+OLb45XurSnO2RZStJI8C5nS3EcUxhzzqGqqCrtnQ63D/dcXF2zurDM2PgMTVWccz2uJCKoKlmW0WoNoqoMDY4A8PnxxvvzBz/8sji/xsTkBGmaEkLIV1VYLQSJFXw95fL8hLunF3a3jrh5fGVz45AQAqrak/fHRfmDRhGEUXwr22P39s+5t7s3uztzt7tz6+1FopFA9BBEkDTiFYKksNCgEUSMhxC0UKxEFMH/laKVhRYnVgcHopWN4imIISRYyWkRRXIRn8U6g7EYmGJmvvne93tPKRQKiq7rd3RdH4plGMbQMIxhsVgcapq2Ya+q6rKqqps0TVMU0zRhmiZs20aplCsuYBTOdF1XVnMcB5ZlQdf1A0qpVIJpmtLz/7Iv5koIge/70gfijFTbcRzYboCIeJIyAYi4SAiRM7ZtG4qu69A0DSJ1Tp3owPMDOI6D1vQEgrAiHxc/sywLhmHklS3LlP2W/M2Yae8Hq9XQmp5EI2sgCAJJmOu6cjqKCBvHcUAIQS2q4sa5S5g91MZMu4UrF/Zi965JcM7BOZcw+b6fQ+JVPPh/qQmDADzlmO8soPviMX5jHcNfX7A1HUcSx3n//+MpRBKWu3jmKK5fncPZzl30L99D4OeeFu4rl8s5YULFMAxBKUWSJPi6+h6Dj8/xtreIl0sr2FLPEIYhBM6SbcYYkiRGmqaI4xhZvYnR6CcGix+wBuDag2doTe1EmtbBGEMURTnbhBBwzpGmXAbT1L4E62sj/Fj9hptvuji95zi2TexAM8ukKTYEmFi3+4cxe3AW55/cR+/1ACcfLmD53We0to+BUiZbrFQqUOyyLUXwPA+UURy51cWxuXk8fdRDf+UVlj59x1g2DkqZZJxSCkXMjTEGxliekpwjy1JUkwYaWR1Z1pRfjaII1WoVYRgqf8gut9+oqiiMz78w99s5Z86c28w+cxjazhSsF+xFY1SI8YJR4gtpiC9okAQfpBVFE0tCQrAvUhPiiwYf8EW5BBIgKaAkkrYofSkPFJBARC4SINz682FmbabxYWfvzOyZvfa3vu9ba8fi8XgslUpti8fjpFIpUqkUYorpdBoRjihM1kLRZDJJIpEgm80iabcsS/NfMzeXk/3b4vF4LCbqS6fT/+OJYTwpOqZp6s9k7qR5qVTCcRyCIGgR1XW11ZumuWhvoVBoWb5Uc3Ez2ejaOfIFg2L7MPmhSEh0JmoX3kkhFpe3bVuvJYBYMpkknU5rmBOJRBvuDNlMlqivm6jZg13MUyzkyecL5PN5ioaBaRqYlqFVJUMOMAxjEdySwkwmQyyXzZFNZ0gnU6Tb+ZUGKJvNYhomb4yu5YWBFSyrLcFTPqZp4NhleoeeZrCrn6qqaEgNw9C+1+l1xWJRB6D7pJJpYRoFjGKeYjGvoy6Xy1SrVapelV/OnmHksy2sX7OalwaW093dRbO3Tt9Tz/Laqn7Ukh7tUq2qFVGr1fB9X8Puui6u6+I4Tqu9KpVKmiwCl2mauK7bUm5QoVYJGR7fxUcfr+eLT8fYPrKZb7aPcvzCFI+AvRt2c/Tktyzva7BsaYMoilBK6ZwLD8rlMq7rEnPMEkWjiF0qEbgelmlRcTzKHWQoWRZW+/ve557n7TXv8tNv40yfvsyJyfOMTxznxsPr7J/8meW9PSivhgoqBEGAbduarKqi9DomOZUKKawWuKVpETZ7dY+tO9YxOraRU/sOcvLQNFsn1nH42AyXZ8+xsn+Augo1izu7KkHSsqxWPyiHiQN5nqedRimFUoparWWqa3d9yN2b97hz5wbX7l1lduo0jxceAneYP3yUoaEVNHqaRLUW1OJo1WpVO7Xv++jmV+pDGIZEkWrPkQ6mUqmg/BqXuMD9u/e58td1rsxd5vY/19k78yuPWWDTW++zY8/3bH5zmMEVfZpcvu8TBIGeHcdp3VhgldtKdGEY4jguvqPYtPNlbl07y7/AzUdw+8EDrv19l/Pzt9jwwxYeLixw8OudvDIwSLPZoNFoUK/XCcNQ/69c0Lbt1sH53JNHS+cwDAO37OC9+DoHDhxg1aur2fLBMMMjG/n92BR79h9hYuw7Nu/exJmZaab+mGLyyGneW/MV3V09uI67yL2ErPLWuNhZ28QKOzXnOA6hCqkvDQmbK/ly31lOXZzlxKFj/Dl/jsmZq3z+yY88M/AOzWVNuru6iKKIer1OFEWEYajz3ebOpVi5XJYx16kzMXpZK6VaDbTv4/utfHm+tyh/naVPHg8ylFJUq9W5MAxjQRDE/iPLWoOjqLJwV/nDf5CankemZ6ZnevqZnp5XJkNmSQgGKIKAQjBSgDx2S3S3FDUlggUVFQurwPiCQgtQKVRUCpEFKdaCXba0dlcLXR7BEMqArgpuNECABAjGAJ8/es6dO/HHrZnu6r7n3nPPOd/3nRZGjRoljB49WvB4PDNFUTzm9Xr7RFHs45krz159Pl+f1+slkclEp9/v7xNFkd0rsloahyoqKmZ4PB7B4/EIFRUVgiCK4m08Fvv9/rKCTtg7EosJt0VRZO/xYMHX5srKSva8x+O5zePxCEz0UiHh0YTAQpIkNigLqNjTQoPBIINJkh08lvP81ufzCYIkSfAVlfZIIkBG+Cjnr+lZIgJUeCguZFn+HUQWq9h8we/3M+pCO6Qd8BqBv1dZWcmM08QEKpqmlRFxWijP6iVJ+l6gc+NdKcsyQpEIIsEAQmGJTcDvjjKAXEsRT4VCVdUywUq7Z9SadspTn1AohEgoBD2fRCFtQ44piHI8i6gPr4bJOC1EURRmjBCK3M04F9EdURTh9/uLUepFIBDEtLFjkMlmEI5EEZRKgRaJkIvDkKSSSOARiGcexFrJw8wwDUqtQCCAQGUAmXkz0ZivhaYoiIQlSCE3ZaryMUyZMg5xTYEsu0aDwWAZIeRjhrKE+J0Q8AdcviV64fWV8pg4sk/2o7V5LiZPaIQqR2CoxTNNOZjzYBNimgotrrHzI+5F4pSntHxNEEqr8SEQqCxL+lAohGhYxqynHsPC+S2YXN8ASzegV5lIZFOYtnABTNNCkuNWxKc1TWPnz1Njcr8gBSVEQmGEQ0GEw8Ey5kG1N7OoCftfW48Vbaswc2oT8pk0stkUCoV6NDRNQF0mi2Q6A9u2mXxzHAeWZZUBDc+/BC6py4oHucs0TaTtKize+AZan1mOdSufwIIFczB7fiNmTCng5bap+OLwGkzPFjC2uoBMKg2ryFh0vaTUeGiUZdkV2Hyi89SWmIdhWDCyCaxdtR6r1q7BmlfWYOWyP6N9w1rcAoCbQMsj07F+0dOY2FiPhJOAbduMbfAsk64FXhe5wjvGcpLXQFVWFcbPasFjyx7F0qWP4tV1G3Du8mEM37wBnBvGQ9tfwJF1RzFx0kSYpuGeu6azRgbNzVytFIu5GnWT3NJ0xIuqnyLV1HTIsRhqMlmMn9aE5av/gosXzqDjRDfe2X0UWz7ajyPvv4z2heswuWGSW7MNN9ii0SjCcgTRaAzRaKl2s/4NX8QJAPhSGQ6HEY+rmH5/AS1/WoIlS5bi+edW4NjBz7Bx90Z0de7HpHwBOSdV1pajd915SjaEIkwx+ONdz2ufcDgMJaqgefY4vL/5LRw5sROfHd+DTUufRUdXF/Z2dGLb08+gtjYPVVMZLNKGRsrbsh4KRSDJSjpnTdNgGAaSdgJf/nAU57svof/8IG5cH8DXZ77FptancP9LT+L15X9FXV0DdMtgnW6ajwcRVVVLwaWqKhPVFM3ElWzbRiLpwEk4OHe1D6e7unH4y2P43zc/4bv+i7hx8wpw8RReWLwcjWPrkcqkWDqRIcdxihni2hBY80PTisZMJBI2E100ksk08tNywK1B/HLlF/T+3IPB6wP42ye7ANxC77+7sH3DVtTfcSdyuRzS6WSZkiiSvVKvnVxKlca2LTiOKzUty2ILsi0b45+dBNwChn4dRM+lXvT2n8R7G/bi0rke9H/Rg7lPLMM/drRh7B11yKUyTK4YhsHmourFulWmaRY5sIVk0kE6nWYvutImhQNn3wUADAwMYPDaNVy5ehEvtr4EAOj/7xVMbb4b+eoxGFNbQE1NjrmXNJNhGIwKM1fz/JlW6D5oQbWj+O7sR7h8bRjDQ79ieHgIV4eG8eOFQax+qB3XcQP9Z0/igVkz0FBXj2w2i+qsK9T5ZozG9Z8F/psLsQaK7nhchZFX0PHOB9i8aSdWbtmO+uZFONR5Gvs+P4H/fHUSD9y7ED/0/h9nfjyLv+/ai8dnzEahJoeqKgu6rpfNSSkajUYhhCQJUpFhjtRNsiwjrmpYvG0ftjw8Dw+3teGP9z2IrZ+8hx17DmDXx59i1p3N6Pz6ODo6juPk8U7s3rYHf8jVwbIc1oUcCRCyLA8JQSkIau/xrSbiSUpMgWHEkbpnAf51+HN8uPpxPL9jDy50/4ytbx3EvNY5uNp3DecvX8bb6z/FuMIEWFaSnWeMq8/0X9f1DwXaPv3yHxpoGLqBRMpBJpPBXSvexM5DX+HbU9+je3gIJ06fwgf/7EFDfTNqc9WoqckhlXTFWjqdZprbsiymr2zbvl1QFKWdkGmkQV64mabpfrlKOcg4KVimA7vKhpNIIVedRDZbzQzx0avrOhKJBB/V7ZqmCUI8HhcURbmHl6c8HFK5pOgsrVwrU468QqTnLctikV3sMLQYhiGYpin8Rre5R0dV3Xt81upa/m2YvGYyM2cmc86cOXPmncmTiAgBErDmChcBTRGLtGgvVhDCo1LLQwTUq1S67LWCIFRaRcRaoAoWKyqiUCAWBRRJRcJzkEAMiEk+94+ZPew5jVlrrzmTZPbZ++y9f7/v4zeCKdrsdrutoKDg9oKCgs8FwRKvsiInw1Rx/UPvra8COsv9ClgtILZAowIUyoKfTCbF5+W+xWey/X1ut9tH2+12m2CpBQUFNlthYaGtqKhoWWFhITfeeGMOVsudyUqgzFiF3SYTS0GP+iMoYtDygMUDEPeUqZlAymLPW1Ga0+nMy+YiCwv4Linby+x2u62wsNBmKykpOSEGKgZhZVHWJmCCfOoFNpUPpRyORKAU4qUgQlZuKkMQsbXF2RDpTEBI+X6yrCPGIzP70tLSr0tKSm7I6YmyViAGYCXFgrnLfFZ0bP1/eULytcPhyMFZmWDLqynAgTif/cm/QvoXiUB+uOI+sjeRfb/RJk/SOmExCZlZCL+uJLuNi0tLKXM4cWY7t66arJ2IhyQwmOw8yoaiTHesfFt+lR0BecJie8tjyeLK72yCBjscjty5tKJcK8lzKE5iN6VIaCo+zYHicuF0u/EIWdti3ogBiBWxauZy4pL9FXnCVvYjeIKcccX/y+KDPIaysjJsAwYMyJ1bIZHJUU/eprlVczgoLnWgJnQqk/Ukb6qiqiJOUHGjKB5cSj4TlvnJdRig5KknsncjT0JG+WInyGdWnpho1rggq3Y2ESHtdjsFBQUUFBT8hxgirGlhTskR3F1hMv5/pjCxvpZYMkbIr6EoDnx+D2WlDpyO/LPsdrtxu9x4FA9udwkedxmK4sKj5Lsw8nGyVmuIuCGLcuJalhrl1CbGmxHWiksoLiyicIA91+wD7LlJCoHUmqZKSkooLSym1FC5fdIUbh00hIpEimQ4hO7zovgU3J4yPGVOPIoHT1aa8leHqB0xmCEtY6ivqMRbXo5fDeDzKrg9+TqYnHKs0qYcCOXVFA9ATFpOfzZ58CUlxRQVF1JUZKeouIjikhKK+9nW18UgF4rXg8NRjLexgWkPz+EnTaNoamqkYfAgKsMhVK0cVdPwB1QChkYwoGLqQdSoxrh50xkarMWv+4lEwhgBnXJ/eV4VhKxayu/78+b6y89izGIHZFzjUgcuZxlljoyr6HY5cTkdlDmdWd80P8zn6LnPh6pmJlSuKDQuvJstL23g162tPNQ6kwfvbuG2IcOpS1UQN03CpolpGhimQaS+geHNoxk8aAQDk0mS8QRmNEIkEs7CwnyaJ7CpcDUEdrUGPGuTc3pO3MrXBsooK3PgdJZSVubE5cr47V4lnwbIeFcPBomGTPRAgCFLfsP2Lbt44uFHmbHwIZ5YupDJE8bx3+NGM3rYUKoScZKJOMlEiqq6OmqrB5KqrueW/xrDqFtuprE6SGU8SiIeJRaLEotGicViOe4cDoeJRCK594KUWbVrOeXllUKIpReBQj4n1pAuto28tQQSCgQChAyTUNAkNuHHrH15NUvvn8qMJY+xYuXzPPP4YubNuo/pUyYx+b6f8cDcOSxd9SsOd7wO/DvbrvH6vDcZ1TKK1gdb+EXjLaSSCapSMWLRGIaRcfyELy0UBgFExETFwsj5Pk++FNBPUa4HDavFICMikSOFMhHQAzlUZBgGUTPCwOZGpj3yMEseXcC8+XOZM7eVWU8v4pVX17Hq2Sd5b99HbP1gA2evHqGvr5deeujp6OGRCctZ9PIMjqeP8enKP9JUV0nDsOHUxisJGSFCZigroejZCat5K2zN5fJK+/1+bF5XZrJl2ciouN1oii/jl2dXMhTQiQRDqL5yvD5vHhDwKAqK20PA5yccDOFVvPh8XgKaRk2qmobm8TTePpr77p7G0iVLeHzZMna3rePKd59z8sRZTl48T3fPd3zb28eZ7j4OrfwD9874KdvOfs36O9eQSFXSPPw2TC2MpqrEzDCJcIRIyMyrwsukOTdeRUEt9xMxTMoVBY/HnWeh2kR9YB4+loCCDB76W/Hc1ne5cDiduNyunICi+ssxQgbxuloamiv5xWP38t7hvfzxD21Mm7WSmb96kseWL+C1zU/y7vaNbNz2Fi+ueZuXNv2ZPz2yntrKH1NXX00inMTvz9Qq+sp9+NXMNla8St4Y3MJPsqSuPKQl0yiRa+X8Joue/Z1pAT2tVM3tcqF4FNxxN0MmtTDmtp8zfXoTjyycxlMv/pbVv1vLguUz2blvI8/NfpWJ8yez65N32H/wM/YfPMTeTTuZMnQY1fV1pOIJNF85Xm9+5V9/97bWsl23p7LVFzJ8FKBCDkxiJa1N1LhZaWBOoPV58bt8RO9K8rd3XmDDn1bScWQvu/+5jc7TF9i6eQdfnf2S93a8w6EzBzh1cBe/e+INps/9PUveWE/HxTRvrnqDkTePoX5gHclIHC0QyK2ulR7K+dgatWU4ahNPR2ZEVq1HpmZyVJYlFiGvBAKBTOCKRImEwrQ8cRfHzxzn0nfdtB88zvkrJ/hs/785duUU3xzpZseHOznffZHTR//FsQ+38Y81c3lx+QyeXfFnftn8ANWpOFUVNcTNBGbIyKOMMpkQ13JxgFxlklPFrdRKrrqVOxcdiJIX0zSvK+ZmxtuJRqPE43HiiQTJigoSiRgzV03jwtWLdJ3v4tKVDk4eucjRs0f56sgZjl86xqkDZ9my5wjip7cXzqV7+KI9zXNTH2fwsGEMb2ikvqaGZEWKWCxOOBzJadjyhIT2JRw2uRIiV+grpxuRr+Rcl6nDMolGw0SjkWzhZIR4tjBS3Ei0zBM2MDWT+MQEuy7tBvq4+n0PF05d4PLlDto/P8436TN8vOc4J88dpu3D9/my8xLpzm566KO77RyzWx5i0faNPD/lIWrNII1Db6YmWU0iESMeixEJR/LqSPpbJKG5i2tN07BZZUq5rkj4kBlnIIRphnJ1RgLpyBKlWP1oJEowEmL2Kz/lGl3QBz091+i+2MW5Mx1c6bpI17fnOH8uzbljHaxetpKt7W8CPfTSR0/bZebdej/Nd45jwv2tTPrliwwdfBc1A+upqhpELJ7M3F+/vnLyFharK3amUD5zfosIUuK8XnccQtmOdEKhIKaZMWRF03U9U+ekqeh6ENMME4ub/OSeGDs/ns/lzsP00ksfvfT2XKO7q5Pvv+/m6tUuLnd2cuF8J+2721k4uZVF7/yWXoCeHto2tTF7ws9pbmqiYfAIBtbWUl1VlWnV1VRWpkgmk7mqIXnLikWQV1Ve1DyjWKQh2SSwljXIUO26lhwklHQxf8VI2r/5O3t2fMZfv+jgL//7NpNWbGD9Xz9l9Y63+bKjg0MHvmD/R5+ya/tetr3yPs8vWsuYhjuZ/fIcvrnWTWfnRbq6v+XrPXtYN2cWD9wxjBE1A0lVVJAImxlyETbzVrE/ePlDENPWH/Wz1tTKUFNO9F6vF59HITwqyVMfvsXRfW0sb7qVuvETWbB4AeOHj6Rl7nwWzp7KPXc08+gLT/PmaxvZ/PI6Nm1Yw6Z1q3h27mJGDh7B5GceZP/hf/HJwU9o+6SN/e99zPsfbWHfprdZ/fxCVrZOY1A8STIZIxzUc1BR/tZFf2nKmlZteeqiRKL7k2mtdUSuLLjwl3vxud2UhRI0L36O/9u5hw9eeJqHx49m6uxFtM5fxG+W38fru1bTfuQQbe++wfv/2Mru7dtYPGUeoyY2sbltPadPnaTjq69oP3GCk4ePc+DjdraufZe7xy2lKjWYWCxJMBhG1wMZWqpquQoeeUdaH4BIXV6vt92Wpwe5XXmwUY7eMkOyimr+8owDrGfPuu7T0KsGUdeyhCXvfsCX3d0c2/J73vrbCvYd/Zovjp5l78EPOHng72xe8WvWvj6fC9+f4urJK7z0zKssfe2fzJiynuqb7qGmqo5UqoZoNJ4NmgbBYKaJ75WI7CC/WtXPbFBrsXk8nrEyQRY6ryycyUqh3MkPdWwYBvFIgmRFklg8TDgQxawaQU3jvdw29UnGzFzN2DueYuS0x2luWUrTXcu5ZeQskpUtxCpGkqqqIVmRIJlMUZHKuKDRSDRXxSLKlUX+F4WiwtgWUVv+PoGmaWM1TbPZFEWxeb3eH3m93mesuu9/Bqf89CVHP5EC5FyYuVnm2jRNjJBBIJBxDgwtgB5UMYI6pqkTMgyChkEoZGQnYVgHnNdkR0KeoKyOZEHHSk3TfqSqqk1VVZvN5/PZysvLc01V1Rv8fv9YVVXXqKq6X1XV05qmpXVdT4tXwzDSuq6nVVVNBwKBtK7r6WAwmDZNMx2JRNKhUCgdCARyfxOf1TQt93vxt3A4nOtP1/W8/oLBYNowjLRhGLnrcDica6Zppk3TTEej0XQkEjltmuZ+0zTXmKY51jTNG0zTtAWDQZuu67n2/wMAI7rnQgsVad0AAAAASUVORK5CYII=
// @include http://www.google.*/search*
// @include https://www.google.*/search*
// @include https://www.google.*/*
// @include https://encrypted.google.*/search*
// @include https://encrypted.google.*/*
// @include https://anubistweaks.github.io/Gbuttons/saveYourLocalStorage.html
// @include https://www.gstatic.com/sites/p/b9356d/system/services/test.html
// @include https://www.gstatic.com/index.html
// ==/UserScript==
var xLocStI =0, xLocSto = [{origin:'https://anubistweaks.github.io/', restHref:'/Gbuttons/saveYourLocalStorage.html'},
	{origin:'https://www.gstatic.com', restHref:'/sites/p/b9356d/system/services/test.html', '//':'blank page'},
	{origin:'https://www.gstatic.com', restHref:'/index.html', '//':'404 page'}];
// For use own eXternal LocalStorage add to array your origin+restHref of site with https protocol,
//   set xLocStI pointed to it, @include directive with this URL. If this script is Chrome extension, fill include_globs in manifest.json.
//   TODO If localStorage will be unavailable, script will be use next indexes of array.
if(location.host == xLocSto[xLocStI].origin.replace(/[^/]*\/\//,'')){
	window.addEventListener('message', function(ev){
		if(/^https?:\/\/www\.google\./.test(ev.origin)){
			var d = typeof ev.data =='string' && ev.data[0] =='{' ? JSON.parse(ev.data) : ev.data;
			if(!d.do) return;
			var tok = d.tok, key = d.key; try{
			switch(d.do){
				case 'set':
					var prev = localStorage[key];
					if(d.val !==undefined)
						localStorage[key] = JSON.stringify(d.val);
					else
						localStorage.removeItem(key);
					break;
				case 'get':
					prev = localStorage[key];
					prev = prev === undefined || typeof prev =='string'&& prev[0] !='{'? prev : JSON.parse(prev); break;
				case 'remove':
					prev = localStorage[key];
					if(prev !==undefined)
						localStorage.removeItem(key);
			}} catch(er){}
			//xLocStI !=0 && console.log('[xLocSto]', tok, 'prev=', prev);
			xLocStI !=0 && ev.source.postMessage(JSON.stringify(prev !==undefined ? {tok: tok, prev: prev} : {tok: tok, undef:1}), ev.origin);
		}},!1); //console.log('[xLocSto-1]_'+ xLocStI);
}else (function(setts){ //lang, sites, lastHoursLess

	var $x = function(el, h){if(h) for(var i in h) el[i] = h[i]; return el;} //===extend===
		,$pd = function(ev){ev.preventDefault();}
		,d = document
		,$q = function(q, el){return (el||d).querySelector(q)}
		,lh = location.href
		,$e = function(g,el){ //===create or use existing element=== //g={el|clone,cl,ht,cs,at,atRemove,on,apT}
			g.el = el || g.el || g.clone ||'DIV';
			var o = g.o = g.clone && g.clone.cloneNode && g.clone.cloneNode(!0)
				|| (typeof g.el =='string' ? d.createElement(g.el) : g.el);
			if(o){ //execute if exist
				if(g.cl)
					o.className = g.cl;
				if(g.cs)
					$x(o.style, g.cs);
				if(g.ht || g.at){
					var at = g.at ||{}; if(g.ht) at.innerHTML = g.ht;}
				if(at)
					for(var i in at){
						if(i=='innerHTML') o[i] = at[i];
						else o.setAttribute(i, at[i]);}
				if(g.atRemove)
					for(var i in g.atRemove)
						o.removeAttribute(g.atRemove[i]);
				if(g.on)
					for(var i in g.on) if(g.on[i])
						o.addEventListener(i, g.on[i],!1);
				g.ap && o.appendChild(g.ap);
				g.apT && g.apT.appendChild(o);
			}
			return o;
		},
		addRules = function(css){$e({apT: d.getElementsByTagName('head')[0], ap: d.createTextNode(css)},'style')},
//check occurrence of third-party event with growing interval: h.t=time, h.i=count, h.c=check, h.o=occur, h.m=multi
		CS = function(h,d){d?h.o(d):h.i--&&setTimeout(function(){CS(h,h.c())},h.t*=h.m)} //example: t:120, i:12, m: 1.6 => wait around 55 sec
//for xLocStor:
		,xLocStorOrigin = d.location.protocol + xLocSto[xLocStI].origin.replace(/[^/]*/,'')
		,qr, qrs ={} //set of queries "key-calls" (ок, toutLitt, toutLong, noService, noStorage)
		,qrI = 0 //queries counter
		,qrN = 12 //max number of waiting queries
		,errIMax = 120, errNMax = errIMax //max number of errors
		,ns ='googXButtons_' //namespace for keys
		,listenMsg
		/**
		 * external localStorage for using another domain if current domain storage is erased anywhere
		 * @param{String} h.do - action: set|get|remove
		 * @param{String} h.key
		 * @param{Object|undefined} h.val (any type)
		 * @param{Number|undefined} h.toutLitt
		 * @param{Number|undefined} h.tout
		 * @param{Function} h.cB - callback with 2 arguments
		 * @param{Function|undefined} h.err - callback for err with one argument
		 */
		,xLocStor = function(h){
			var h0 = h;
			h.toutLitt = h.toutLitt || 400;
			h.tout = h.tout || 4000;
			var ifr = d.getElementById('xLocStor')
				,query = function(){
				if((qrI += 1) > qrN){
					xCatch('longQrs', null, h);
					return;}
				ifr.contentWindow.postMessage(JSON.stringify($x({
						do: h.do
						,tok: token
						,key: ns + h.key
					}, h.val !==undefined ? {val: h.val}:{}) )
					, xLocStorOrigin);
				qrs[token] = $x({ //for wait of response
					wToutLitt: (function(h, qrI, errIMax){return setTimeout(function(){
						qrI -= 1;
						if((errIMax -= 1) >=0)
							;//console.warn('toutLitt', h);
						chkErrMax();
					}, h.toutLitt);})(h, qrI, errIMax)
					,wTout: (function(h, qrI){return setTimeout(function(){
						qrI -= 1;
						//xCatch('tout', null, h);
						//xLocStor(h0);
					}, h.tout);})(h, qrI)
				}, h);
			}
				,token = +new Date() + (Math.random()+'').substr(1,8)
				,el = h.el;
			delete h.el;
			if(ifr) query();
			else ifr = $e({
				el: 'iframe',
				at:{id: 'xLocStor'
					,src: xLocStorOrigin + xLocSto[xLocStI].restHref},
				cs: {display: 'none'},
				on: {load: query},
				apT: el || d.body
			});
			if(!listenMsg) addEventListener('message', function(ev){
				if(ev.origin == xLocStorOrigin){   // {"tok":"<value>"[,"err":"<txt>"],"h":...}
					//console.log('from_io', JSON.parse(ev.data))
					var resp = ev.data && ev.data[0] =='{' && JSON.parse(ev.data);
					if(!resp) xCatch('bad_format', resp, h);
					if(( qr = qrs[resp.tok] )){
						qrI -= 1;
						qr.cB(resp.prev, resp.undef);
						var er = qr.err;
						delete qrs[resp.tok];} // else ignore unsufficient token
					if(resp.err && (!er || er(resp.err)) ) //individual or common error processing depends of er()
						xCatch(resp.err, resp, h);
				}},!1);
			listenMsg =1;
		},
		//for tests: localStorage.googXButtons_dwmyh = JSON.stringify({h:[1,2,1,1,1]})
		//$('#xLocStor').contentWindow.postMessage('{"do":"get","key":"googXButtons_dwmyh"}',xLocSto[xLocStI].origin)
		xCatch = function(er, resp, h){
			if((errIMax -= 1) >=0)
				console.error('tok:', resp && resp.tok ||'--','; err:', er,'; h:', h,'; respH:', resp && resp.h);
			chkErrMax();
		},
		chkErrMax = function(){if(!errIMax) console.error('Too many err messages:', errNMax)}
		,fileType ='PDF,DOC,RTF,ODF,XLS,ODS,PPT,ODP,TXT,XML,More...,  KML,DWF,PS,WPM,BAS,C,CC,CPP,CXX,  Java,PL,PY,H,HPP,CS'
			.split(/,\s*/).map(function(x){return '&nbsp;'+x+'&nbsp; '})
		,isFTMore =0
		,meta={Goog:'',Duck:'',Bing:'',Ask:'',Baidu:'',Yandex:'',Mailru:'',SlideS:''} //will create child-tabs (window names)
		,imgFile='SVG,JPG,GIF,PNG,BMP,webp,ICO,RAW'.split(',').map(function(x){return '&nbsp;'+x+'&nbsp; '}) //will switch to Img Search
		,imgType='face,clipart,photo,lineart,animated'.split(',') //for Img Search (+imgColor,imgSize,imgSizeLt)
		,imgColor='red,orange,yellow,green,teal,blue,purple,pink,white,gray,black,brown'.split(',')
		,imgSize='l,m,small,icon,>=,Exact...'.split(',')
		,imgSizeLt='vga,svga,xga,2mp,4mp,qsvga'.split(',')
		,$l ={ar:{
			'search in PDF files':'البحث عن الوثائق PDF'
			,'search in':'البحث عن طريق'
			,'More':'أكثر'
			,'search black/white':'ابحث عن أبيض وأسود'
			,'return to colored':'العودة إلى اللون'
			,'from / to':'لفترة من الوقت'
			,'past':['لآخر','لآخر','لآخر']
			,'day':'يوم'
			,'days':['يوم','أيام']
			,'week':'أسبوع'
			,'weeks':['أسابيع','أسابيع']
			,'month':'شهر'
			,'months':['شهور','شهور']
			,'year':'سنة'
			,'years':['من السنة','سنين']
			,'hour':'وقت'
			,'hours':['الساعة','ساعات']
			,'Settings':'إعدادات'
			,'of userscript':'مستخدم'
			,'reload page for effect':'إعادة تحميل الصفحة'
			,'Interface language':'لغة الواجهة'
			,'Less positions at the end of selects':'خيارات أقل في نهاية التحديدات'
			,'Gray design of buttons':'تصميم زر رمادي'
			,'Show Filetype Button':'زر أنواع الملفات'
			,'Sites':'موقع'
		},fr:{
			'search in PDF files':'la recherche dans les fichiers PDF'
			,'search in':'rechercher dans'
			,'More':'Plus'
			,'search black/white':'trouver noir et blanc'
			,'return to colored':'retour à la couleur'
			,'from / to':'pour la période'
			,'past':['le dernier','dans les derniers','dans les derniers']
			,'day':'jour'
			,'days':['jours','jours']
			,'week':'semaine'
			,'weeks':['semaines','semaines']
			,'month':'mois'
			,'months':['mois','mois']
			,'year':'an'
			,'years':['ans','ans']
			,'hour':'heure'
			,'hours':['heures','heures']
			,'Settings':'Paramètres'
			,'of userscript':'de Userscript'
			,'reload page for effect':'recharger la page pour effet'
			,'Interface language':'Langue de l\'interface'
			,'Less positions at the end of selects':'Moins de choix les longues listes'
			,'Gray design of buttons':'Gris design des boutons'
			,'Show Filetype Button':'Bouton Types de fichiers'
			,'Sites':'Les sites'
		},de:{
			'search in PDF files':'Suche in PDF-Dateien'
			,'search in':'Suche in'
			,'More':'Mehr'
			,'search black/white':'schwarz und weiß finden'
			,'return to colored':'zurück zur Farbe'
			,'from / to':'im Zeitraum'
			,'past':['letzte','letzte','letzte']
			,'day':'Tag'
			,'days':['Tage','Tage']
			,'week':'Woche'
			,'weeks':['Wochen','Wochen']
			,'month':'Monat'
			,'months':['Monate','Monate']
			,'year':'Jahr'
			,'years':['Jahre','Jahre']
			,'hour':'Stunde'
			,'hours':['Stunden','Stunden']
			,'Settings':'Einstellungen'
			,'of userscript':'von Userscript'
			,'reload page for effect':'Seite neu laden'
			,'Interface language':'Sprache'
			,'Less positions at the end of selects':'Weniger Auswahl in langen Listen'
			,'Gray design of buttons':'Graues Design der Schaltflächen'
			,'Show Filetype Button':'Schaltfläche Dateitypen'
			,'Sites':'Websites'
		},es:{
			'search in PDF files':'búsqueda en archivos PDF'
			,'search in':'busca en'
			,'More':'Más'
			,'search black/white':'encontrar blanco y negro'
			,'return to colored':'volver al color'
			,'from / to':'para el período'
			,'past':['el último','en los últimos','en los últimos']
			,'day':'día'
			,'days':['días','días']
			,'week':'Semana'
			,'weeks':['semanas','semanas']
			,'month':'mes'
			,'months':['meses','meses']
			,'year':'año'
			,'years':['años','años']
			,'hour':'hora'
			,'hours':['horas','horas']
			,'Settings':'Ajustes'
			,'of userscript':'de userscript'
			,'reload page for effect':'página para efecto de recargar'
			,'Interface language':'Idioma de interfaz'
			,'Less positions at the end of selects':'Menos elección en listas largas'
			,'Gray design of buttons':'Diseño gris de botones'
			,'Show Filetype Button':'Botón de tipos de archivo'
			,'Sites':'Sitios'
		}},cB; //if !lang, then no hints
	var bBack = /^(?:rgba?\((\d+)|#(.))/.exec(window.getComputedStyle(d.body).backgroundColor.replace(/gb/,'gba')), // for Images tab
		mDark = (d.querySelectorAll('meta[name="color-scheme"]')[0]||{}).content==='dark'|| bBack && (bBack[1] && bBack[1] <96 || bBack[2] && bBack[2] <6);
	addRules('.hp .sfsbc,.sfsbc{display:inline-block}.siteList:hover button{display:block}'
		+'.gb_Ib >.gb_e{height:47px}.gb_Fb{z-index:1087}.tsf-p{z-index:203}'
		+'.lsbb .xButt,.lsbb >.siteList,.sbibod .xButt,.sbibod >.siteList   {z-index:2002; width:34px; height:17px;'
			+'padding:0 2px; line-height:14px; font-size:14px; border:1px solid transparent; border-radius:2px;'
			+'background-color:#dddae6; color:#eee; opacity:.07; transition:opacity .57s ease-in}'
		+'.lsbb >.siteList:hover   {background-color:#4889f1}'
		+'.lsbb >.siteList,.sbibod >.siteList   {width:32px; height:auto; padding:1px 0 2px; text-align:center}'
		+'.lsbb >.siteList .lsb >.txt.or   {visibility:hidden; position:relative; left:3px; top:-2px; margin-left:-14px;'
			+'font-size:9px; font-variant:small-caps; border:1px solid rgb(72, 137, 241); border-radius:8px;'
			+'background-color:rgba(233, 238, 247, 0.66); color:rgb(131, 105, 68)}.lsbb >.siteList .lsb >.txt.or.sit   {left:-1px}'
		+'.lsbb >.siteList .selted .lsb:not(.more):not(.moreShow):not(.sett):hover >.txt.or   {visibility:visible}'

		//deprecated gray design
		+'.lsbb .xButt:hover,.sbibod .xButt:hover,.xButt.xButt2:hover .xButt2,.xButt2:hover{background-color:#c3d4e1; color:#fff; opacity:1}'
		+'.xButt2{padding:0 0 2px; background-color:#dad6e2; color:#eee; opacity:1}'
		+'.sbibod.lsbb{height:44px}'
		+'.sbibod .xButt:hover,.sbibod .xButt2:hover,.sbibod .xButt:hover .xButt2{background-color:#c3c6c7}'
		+'.sbibod:not(.lsbb) >.siteList, .sbibod:not(.lsbb) >.xButt2{background-color:#dddae6; opacity:.45}'
		+'.sbibod:not(.lsbb) >.siteList:hover, .sbibod:not(.lsbb) >.xButt2:hover{background-color:#dddae6; opacity:.87}'
		+'.sbibod >.siteList >.list{background-color:#e1deeb}'
		+'.sbibod >.siteList.fade:hover{opacity:1; transition:opacity .1s ease-in}'
		+'.sbibod >.siteList.fade{opacity:0.23}'

		+'.list .more ~.xButt{display:none!important}'
		+'.list .moreShow ~ .xButt{position:absolute!important; left:52px; height:19px!important}'
		+'.list .moreShow~.x2.xButt, .list .moreShow~.x2 ~.xButt{left:99px}'
		+'.siteList .sett .txt{padding:2px 2px 4px; font-size:14px}'
		+'.siteList .settIn{display:none; width:250px; padding:2px 4px; text-align:left; border:1px solid #48f; font-size:14px;'
			+'background-color:#dde; color:#336}'
		+'.siteList .settIn hr{margin:2px 0}'
		+'.sbibtd .sfsbc .nojsb, .siteList .sett:hover .settIn, .siteList .settIn.changed,'
		+'.siteList .settIn.changed .reload{display:block}.siteList .settIn .reload, .siteList.hiddn{display:none}'
		+'div.gb_g[aria-label="promo"],.pdp-psy.og-pdp, .gb_Sc.gb_g .gb_ha, .gb_g.gb_ha:not(.xpdopen ){display:none}'
		+'.xpdopen{display:block!important}.rhsvw{opacity:.16; transition:.4s}.rhsvw:hover{opacity:1}'
		+'.srp #sfdiv{overflow:inherit}' //hide promo
		+'.UUbT9 >div.aajZCb{background-color:rgba('+(mDark?'40,44,48, 0.92':'255,255,255, 0.75')+');}' //opacity for suggests
		+'.UUbT9 ul li div span b{background-color:rgba('+(mDark?'88,93,99':'237,242,248')+', 0.9); margin:0 -6px 0 4px; padding:0 6px 0 0;border-radius:7px;}' //white under suggest texts
		+'.gb_kb{padding-left:10px; padding-right:7px}form .RNNXgb{position:relative; background:rgba('+(mDark?'40,44,48':'255,255,255')+', 0.92)}'
		+'.RNNXgb, #tsf{width:auto!important} #searchform form#tsf{max-width:auto} body div#searchform,body  .ctr-p{min-width:0}'
		+'div#searchform.minidiv{top:-8px!important}.minidiv .sfbg{margin-top:-26px!important}' // for  narrow sticked searchbar
		+'.minidiv .sfbg{top:-39px}.minidiv .sfbg +form#tsf{top:-39px}.minidiv .sfbg +form#tsf:hover{top:0}' //hide sticked
		+'.minidiv .sfbg +form#tsf:hover .siteList, .minidiv .sfbg +form#tsf:hover .lsbb >.xButt   {top:-6px!important}'
		+'.RNNXgb .Tg7LZd   {flex:0 0 auto; visibility:hidden; width:44px; height:44px; margin-right:-31px; padding:0 13px 0 0;'
		+'	 border-radius:0 8px 8px 0; background:transparent; border:none; outline:none}'
		+'.emcav div.RNNXgb   {z-index:998; box-shadow:0 -1px 4px 0 rgba(32,33,36,0.28)}'
		+'.minidiv .RNNXgb   {z-index:998}.minidiv .RNNXgb:hover   {box-shadow:0 -1px 4px 0 rgba(32,33,36,0.28)}'
		+'.A8SBwf .logo +.RNNXgb .Tg7LZd   {visibility:visible; margin-right:-9px; margin-bottom:-2px; transition:margin 5s ease-in-out}');
	try{xLocStor({do:'get', key:'sett', val:setts, cB: cB=function(prev,undef){
		S = prev || setts;
		S.dwmyh = S.dwmyh || setts.dwmyh; //temp. transitional expr.
		console.timeStamp = function(){};
		addRules(!(S.whiteMintOval || S.whiteMintOval===undefined) ? //blue old design
		'.lsbb .xButt:not(.xButt2),.lsbb >.siteList,.sbibod .xButt:not(.xButt2)   {text-align:center; background-color:#4889f1; color:#fff; opacity:0.75}'
		+'.lsbb >.siteList .lsb,.sbibod >.siteList .lsb   {font-weight:normal; color:#d4d4d4}'
		+'.lsbb .lsb:hover,.sbibod .lsb:hover   {opacity:1; color:#f1c44a; cursor:default}'
		+'.lsbb >.siteList >div:not([class]):hover,.sbibod >.siteList:hover   {background-color:#c2d4e0; color:#f7f7f7; opacity:.93}'
		+'.lsbb >.siteList >div:not([class]):hover span   {color:#aa6c1c}'
		+'.lsbb >.siteList .sett .txt{background-color:#4889f1}'
		//white-mint-oval design
		:'.lsbb .xButt:not(.xButt2), .lsbb >.siteList   {text-align:center; background-color:rgb('
			+(mDark?'92,100,110':'240,247,248')+'); opacity:0.75; color:rgb('+(mDark?'40,44,48':'137,137,137')+')}'
		+'.lsbb >.siteList   {border:1px solid rgb('+(mDark?'87,97,108':'183,219,205')+'); border-radius:10px; background-color:rgba('
			+(mDark?'86,89,92':'243,243,243')+',0.7); color:rgb('+(mDark?'140,154,173':'75,143,231')+')}'
		+'.lsbb >.siteList .lsb   {font-weight:normal; border:1px solid rgb('+(mDark?'98,98,90':'210,210,190')
			+'); border-radius:10px; background-color:rgb('+(mDark?'77,84,89':'225,239,239')+'); color:rgb(140, 140, 140)}'
		+'.lsbb .lsb:hover   {opacity:1; color:rgb(152, 123, 43); cursor:default}'
		+'.lsbb >.siteList:hover   {background-color:rgb('+(mDark?'87,97,108':'183,219,205')+')}'
		+'.lsbb .xButt:hover   {background-color:rgb(221, 230, 228)}'
		+'.lsbb >.siteList >div:not([class]):hover span   {color:rgb('+(mDark?'233,140,19':'170,108,28')+')}'
		+'.lsbb >.siteList .sett .txt   {position:relative; top:2px; margin:0 -2px; padding:1px;' +
			'border:1px solid rgb('+(mDark?'87,97,108':'183,219,205')+'); border-radius:10px; background-color:rgb('+(mDark?'92,100,110':'240,247,248')+')');
		CS({t:120, i:12, m: 1.6
			,c: function(){
				return d && d.getElementsByName('q') && !/[?&]tbm=(shop|bks|fin)/.test(lh) && d.getElementsByName('q')[0];
			},
			o: function(dat){
				var lang = S.lang != null ? S.lang : setts.lang
					,sites = S.sites && (S.sites.length && S.sites[0] || S.sites.length >1) && S.sites
					|| typeof sites =='string'&& [sites] || !S.sites && setts.sites || null;
				var strSites = sites && sites.join('\n').replace(/^\n/,'\n\n') ||''
					,$L = $l[lang] || $l.ar; //default template of lang
				if(!lang || !$l[lang] || lang =='en') for(var l in $L){ //replace 'en' lang for default or substitution
					if($L[l] instanceof Array) for(var l2 in $L[l])
						$L[l][l2] = l;
					else
						$L[l] = l;
				}
				var srch = $q('.RNNXgb')
					,startPg = srch && !$q('button', srch) || /\/(web|img)hp/.test(lh);
				if(startPg){
					//console.log('==-==startPg', srch);
					$e({el:'button', cl:'Tg7LZd', at: {'aria-label':'Google Search', type:'button', jsname:'Tg7LZd'
						,innerHTML:'<div class="gBCQ5d"><span class="z1asCe MZy1Rb">sr</span></div>'}
						, apT: srch});
				}
				var $LSettings = $L['Settings'];
				if(sites && sites.length)
					sites.push($LSettings);
				var mainPg = /\/search\?|&q=|#q=/.test(lh)
					,inputSearch = dat
					,layout1811 = $q('.Tg7LZd') || $q('button[aria-label="Google Search"]') || $q('button[jsname="Tg7LZd"]')
					,design1612 = ($q('#_fZl') || $q('.sbico-c')) && !layout1811
					,d16 = (design1612 || layout1811) && S.design1612
					,imSrch = /[?&]tbm=isch|\/imghp/.test(lh) // sizes are shown if images (outdated): /[&?]tbs[^&]*?(=|,|%2C)imgo(:|%3A)1/i
					,imgTools = imSrch && /[&?]tbs=[^&]*/.exec(lh) //'tbs' with all params
					,isBWShown = imgTools && /[&?]tbs[^&]*?(=|,|%2C)ic(:|%3A)gray/i.exec(lh) // Black-White Images search
					,buttSearcStart = startPg && layout1811 && ($q('input[name="btnK"]') || $q('input[aria-label="Google Search"]')) || $q('button[jsname="Tg7LZd"]') //for the start page
					,buttSearch = d.getElementsByName('btnG') && d.getElementsByName('btnG')[0] || design1612 || layout1811
				,buttS ={
					Srch:{url:'', txt:'search'}
					,PDF:{url:'filetype:PDF', txt:$L[imSrch?(isBWShown ?'hide':'show') +' sizes':'search in PDF files']}
					,site:{url:'site:'+ S.sites[0], txt:$L['search in']+' '+ S.sites[0], one:'day'} //you may comment this line
					//,'.. : ..':{url:'', txt:$L['from / to']}
					,'1D':{url:'&tbs=qdr:d', txt:$L['past'][1] +' '+ $L['day'], one:'day', up:13,lett:'D'}
					,'1W':{url:'&tbs=qdr:w', txt:$L['past'][2] +' '+ $L['week'], one:'week', up:14,lett:'W'}
					,'1M':{url:'&tbs=qdr:m', txt:$L['past'][0] +' '+ $L['month'], one:'month', up:20,lett:'M'}
					,'1Y':{url:'&tbs=qdr:y', txt:$L['past'][0] +' '+ $L['year'], one:'year', up:15,lett:'Y'}
					,'1H':{url:'&tbs=qdr:h', txt:$L['past'][0] +' '+ $L['hour'], one:'hour', up:23,lett:'H'}
				}, ii = -1, iD = -1;
				if((design1612 || layout1811) && !d16 && buttSearch && buttSearch.parentNode)
					buttSearch.parentNode.className +=' lsbb';
				!sites && delete buttS.site;
				if(!layout1811 && buttSearch && buttSearch.parentNode){ buttSearch.parentNode.style.position ='relative';
					buttSearch.parentNode.style.zIndex ='1003';}
				if(buttSearch && top == self) for(var i in buttS) if(i=='site'&& !S.sites || !imSrch || i !='1H'){++ii; //buttons under search input line
					if(i.length ==2) iD++; else iD=-1;
					var bI = buttS[i]
						,Gesch = ({m:'letzter',f:'letzte',n:'letztes'})['m,f,m,n,f'.split(',')[iD]]
						,hint = function(j){return (j+1) +' '+ (j % 10 || j==10 ? $L[bI.one +'s'][j % 10 <4 && (j/10|0)!=1 ?0:1] : $L[bI.one]) }
						,csLeft = function(ii,a){a = -127 + 37 * (ii -1); return design1612 || layout1811 ?{right: -a+1500+'px'}
							:{left: a+'px'}}
						,isBWShown2 = isBWShown && i=='PDF'
						,butt2 = $e({clone: i =='site'|| i.length ==2 || i=='PDF'
							? $e({cl: 'siteList', cs: {cursor:'default'}, at: {site: S.sites[0], date: bI.url} })
							: i !='.. : ..'|| mainPg ? $e({el:'button', cl: 'xButt ' +(d16 ?'xButt2':'lsb')}) : $e({cl: 'siteList hiddn'})
						,at: {value: iD !=-1 && S.dwmyh[iD] !=1 ? S.dwmyh[iD] + bI.lett : i
							,innerHTML: '<div'+ (d16 ?' class=xButt2':'') +'><s'+ (isBWShown2?'':'pan') +' class=txt onclick=this.parentNode.click();return!1 title="'
							+(lang || i=='site'|| i=='.. : ..'
								? ((iD==-1 || S.dwmyh[iD]==1 ? bI.txt : $L['past'][1] +' '+ hint(S.dwmyh[iD]-1))||'').replace(/letzte/,Gesch) :'')
							+'" itrvNum="'+ (i=='site'?'': bI.url + (imSrch?'': S.dwmyh[iD])) +'">'
							+(iD !=-1 && S.dwmyh[iD] !=1 ? S.dwmyh[iD] + bI.lett : imSrch && i=='PDF' ?'B/W': i) +(isBWShown2?'</s>':'</span>')+'</div>'}
						,cs: $x({position:'absolute', top:startPg ?'40px':'33px',wordSpacing:'-1px',
							visibility: ii <= S.hiddenEdgeLeft ?'hidden':'visible'}, $x(csLeft(ii),
							ii===2 ? {width:'26px', marginRight:'3px', borderRadius:'2px', lineHeight:'0.75em', marginTop:'0.125em'}:{}))
						,on: {click: (function(bI, i, iD){
							//console.log('clic0:', i, iD);
							return /Srch|PDF|DOC|site/.test(i)
								? function(ev){
									var t = ev.target;
									//console.log('cli-DocSite: i,t.class,value,ev,attrSite,$LS,aPSite,bSSta',i, t.className, inputSearch.value,ev, 'attrSite:'
									//	,t.getAttribute('site'),'aP:', t.parentNode.getAttribute('site'), buttSearcStart);
									if(t && t.className =='defa')
										saveLocStor('','','remove'); $pd(ev);
									if(t && (t.getAttribute('site')==$LSettings || t.parentNode && t.parentNode.getAttribute('site')==$LSettings)
										&& !/Srch|PDF|DOC/.test(i)) return;
									if(t.classList.contains('settIn')||t.parentNode.classList.contains('settIn')){ev.stopPropagation();return;}
									if(t && t.className !='txt')
										inputSearch.value = (inputSearch.value||'').replace(/( site(:|%3A)\s*\S*|$)/ig, /Srch|site/.test(i)?'':'$1').replace(/( |\+|&as_)filetype(:|%3A)[^\&]*/g,'')
											+' '+ (/Srch|PDF|DOC/.test(i) ? imSrch ?'': bI.url
											: 'site:'+ (t && (t.getAttribute('site')|| t.parentNode && t.parentNode.getAttribute('site'))||''));
									if(t && (t.getAttribute('site') ==null && t.parentNode && t.parentNode.getAttribute('site') ==null && !/Srch|PDF|DOC/.test(i)))
										return;
									if(imSrch && i=='PDF'){
										ev.stopPropagation();
										saveLocStor();
										location.href = isBWShown ? lh.replace(new RegExp(imgTools[0]), imgTools && imgTools[0]
												.replace(/(,|%2C)?ic(:|%3A)gray/ig,'').replace(/([?&])tbs=?,?(&|$)/,'$1')) //return to colored
											: imgTools ? imgTools && lh.replace(new RegExp(imgTools[0]), imgTools[0] + (imgTools[0].length <5 ?'':',') +'ic:gray') //upd.'Show'
												: lh + (/\?/.test(lh) ?'&':'?') +'tbs=ic:gray'; //new Tools-More_tools_Show_sizes
									}else if(t && /xButt|txt/.test(t.className) && !(i=='site'&& !(/list/.test(t.parentNode.className)
										|| /list/.test(t.parentNode.parentNode.className))) || t && /Srch|PDF|DOC/.test(t.value))
										/*console.log('==startSrch'),*/(buttSearcStart || buttSearch).click();
								}: !bI.url ? function(ev){ //from-to date (! not used now)
										var el = $q('#cdrlnk'), o;
										el && el.dispatchEvent(((o = d.createEvent('Events')).initEvent('click', !0, !1), o));
										$pd(ev);
									}: function(ev){ //past interval
										var t = ev && ev.target, sbd = /,sbd:1/.test(lh), ta = t
											,tOvr = t && t.parentNode, tOv0 = tOvr
											,date2 = tOvr && tOvr.getAttribute('date');
										var l2 = startPg ? lh.replace(/^([^/]*)\/\/([^/]+)\/?([^?#]*)([?#]?.*)/, '$1//$2/search$4') : lh; // insert '/search?' instead any
										//console.log('cli-Past: value,date2,siteList,list,l2',inputSearch.value,date2,tOvr.classList.contains('siteList'), t.classList.contains('list'), l2);
										if(tOvr && tOvr.classList.contains('siteList') && !ta.classList.contains('list')){ //clicked by top button
											var elTop = $q('div:not(.list) >.txt', tOvr) ||''
												,itrvNum = elTop && elTop.getAttribute('itrvNum') ||''
												,newSrch = /[?&]q=/.test(l2) ? l2.replace(/(&|\?)q=([^&]*)(&|$)/g,'$1q='+ encodeURIComponent(inputSearch.value) +'$3') //add value to '[?&]q=[^&]*'
													: l2 + (/\?/.test(l2) ?'&':'?') +'q='+ encodeURIComponent(inputSearch.value); //set new value as &q=.+
											if(layout1811 && itrvNum !=='' && date2)
												location.href = /qdr(:|%3A)([dwmyh])\d*/.test(l2)
													? newSrch.replace(/([?&]tbs=)?qdr(:|%3A)[dwmyh]\d*/
														,function(x){return itrvNum.replace(/&/, /\?/.test(x) ?'?':'&')}) //patch date in URL
													: newSrch + (/\?/.test(newSrch) ?'&':'?') + itrvNum; //add date in URL
											if(itrvNum != null) S.dwmyh[iD] = +(itrvNum ||'').replace(/\D/g,'');
										}else if(t.textContent || tOv0.textContent){
											var sa = (t.textContent || tOv0.textContent ||'').replace(/\D/g,'');
											if(sa.length <=6)
												S.dwmyh[iD] = +sa;
										}
										//console.log('==noDocNoSite', tOvr.value, itrvNum);
										$pd(ev);
										ev.stopPropagation();
										saveLocStor();
									}
						})(bI, i, iD),
							mouseover: i =='site' || i.length ==2 || i=='PDF' ? (function(bI,i){return function(ev){
									clearTimeout(bI.ww);
									var t = ev.currentTarget;
									t.classList.add('fade');
									$q('.list', t).style.display ='block';
								}})(bI,i) :'',
							mouseout: i =='site' || i.length ==2 || i=='PDF' ? (function(bI,i){return function(ev){
									var t = ev.currentTarget;
									clearTimeout(bI.ww);
									bI.ww = setTimeout(function(){
										$q('.list',t).style.display ='none';
										t.classList.remove('fade');
									}, 570);
								}})(bI,i) :'',
							change: saveLocStor
						}
						,apT: buttSearch.parentNode
					});
					bI.el = butt2;
					if(i =='site' || i.length ==2 || i =='PDF'){ //dropdown lists under some buttons
						//TODO 'list selted' will be placed if search by filetype or by site was presented (and accordingly buttons will be with 'selted')
						var siteList = $e({cl:'list',cs:{display:'none'}, apT: butt2}), arr =[];
						for(var j =0; j < (imSrch ?1: bI.up -(i=='1W'&& S.lastHoursLess ?4:0) -(i=='1M'&& S.lastHoursLess ?9:0) -(i=='1Y'&& S.lastHoursLess ?5:0)); j++)
							if(i !='1H' || !S.lastHoursLess || j < 8 || j % 2 )
								arr.push(hint(j));
						//console.log(S.sites,i, S.dwmyh);
						var list = i=='site' ? sites ||[] : i =='1D'&& !sites ? arr.concat([$LSettings])
							: i=='PDF'? imSrch ? imgFile : fileType : arr,
							fTMoreX2 =0;
						for(var j in list) if(j !=0 || iD!=-1 && S.dwmyh[iD] !=1){
							//console.log('==i,sI', i, sI);
							fTMoreX2 = /CPP/.test(fTyp) || fTMoreX2;
							var sI = list[j]
								,fTyp = sI.replace(/&nbsp; ?/g,'')
								,fTMore = /More\.\.\./.test(fTyp)
								,butt3 = $e({clone: sI==$LSettings ? $e({cl: 'sett' +(d16 ?' xButt xButt2':' lsb')})
									: $e({el:'button', cl: 'xButt' +(d16 ?' xButt2':' lsb') +(fTMore ?' more':'') +(fTMoreX2 ?' x2':'')})
								,at:{value: sI
									,site: sI
									,date: bI.url.replace(/pdf$/i, fTyp)
									,title: sI==$LSettings || !lang ?'':(/site|PDF/.test(i)
										? ($L[i=='PDF'?'search in PDF files':'search in'] +(i=='PDF'?'':' '+ sI)).replace(/PDF/,fTyp)
											: j==0 ? bI.txt : $L['past'][1] +' '+ sI).replace(/letzte/,Gesch)
									,innerHTML: (/site|PDF/.test(i) ?'<span class="txt or'+(i=='PDF'?'':' sit')+'" data-val="'+ sI.replace(/&nbsp; ?/g,'') +'" title="' //multiselect mechanics
											+(1 ?(i=='PDF'?'':'sites ') +'multiselect'+ (i=='PDF'?' of types':''):'click to disable select')
											+'">'+(1 ?'OR':'V')+'</span>':'')
										+'<span class=txt>'+ sI +'</span>'+ (sI != $LSettings &&!(!S.sites && i =='1H')
										?'':'<div class="settIn">'
										+$L.Settings +' '+ $L['of userscript'] +'<br/>"Google Search Extra Buttons"<hr/>'
										+$L['Interface language'] +': <select class="lang" style="width:70px">'
										+(function(){var s='<option'+ (lang=='en'?' selected':'') +'>en</option>';
											for(var i in $l)
												s+='<option'+ (lang==i ?' selected':'') +'>'+ i +'</option>';
											return s +'<option value=""'+ (lang==''?' selected':'') +'>en w/o hints</option>'})()
										+'</select><br/>'
										+'<input type="checkbox" class="less" id="hoursLess"'+ (S.lastHoursLess ?' checked':'')+'/>'
											+'<label for="hoursLess" id="hoursLessL">'+ $L['Less positions at the end of selects'] +'</label><br/>'
										+'<input type="checkbox" class="des16" id="design1612"'+ (/*!layout1811 &&*/ S.design1612 ?' checked':'')+ (1?' disabled':'')+'/>'
										+'<input type="checkbox" class="des18" id="whiteMintOval"'+ (S.whiteMintOval || S.whiteMintOval===undefined ?' checked':'')+'/>'
											+'<label for="whiteMintOval" id="whiteMintOvalL">'+ $L['Gray design of buttons'] +'</label><br/>'
										+'<input type="checkbox" class="butTyp" id="butTypes"'+ (S.hiddenEdgeLeft ?'':' checked')+'/>'
											+'<label for="butTypes" id="butTypesL">'+ $L['Show Filetype Button'] +'</label><br/>'
										+'<i><a href="#" class="defa" style="float: right">Default settings</a></i>'
										+$L.Sites +': <br/><textarea class="sites" style="width:97%" rows=8>'
										+ strSites +'</textarea><br/>'
										+'<a class="reload" href=# onclick="location.reload();return!1">'
										+ $L['reload page for effect'] +'</a>'
										+'</div>')}
								,cs: Object.assign({position: (sI != $LSettings || design1612 || layout1811)&& !fTMore ?'static':'absolute',display:'block'
									,width: sI != $LSettings ?'auto': /en|es/.test(lang)||!lang ?'3em':'4em'
									,height: sI != $LSettings ?'18px':'16px',margin:'2px 0 -1px -13px', padding:'0 2px 0 1px', minWidth:'42px'
									,top: (19* j - 175 - 133* fTMoreX2) +'px'
									,textAlign:'left', fontWeight:'normal', opacity:1, whiteSpace:'nowrap'}, fTMore ?{top:'18px',left:'47px'}:{})
								,on:{click: (function(fTyp,pdf,fTMore){return function(ev){var t = ev.target;
									var less = $q('#hoursLess')
										,des16 = $q('#design1612') //&& !layout1811
										,des18 = $q('#whiteMintOval')
										,butTyp = $q('#butTypes')
										,itrv = t.getAttribute('date')||t.parentNode.getAttribute('date')||''
										,num = (t.getAttribute('site')||t.parentNode.getAttribute('site')||'').replace(/site/.test(itrv)?/^/:/\D/g,'');
									//console.log('==clic3:t,itrv,num,fTyp,pdf:',t, itrv, num,'|',fTyp,pdf);
									if(t.classList.contains('sett')||t.parentNode.classList.contains('sett')){ev.stopPropagation();return;}
									if(less && /hoursLess/.test(t.id)){
										less.outerHTML = '<input type="checkbox" class="less" id="hoursLess"'
											+(less.getAttribute('checked')!=null ?'':' checked="checked"')+'/>';
										saveLocStor();}
									if(des16 && /design1612/.test(t.id)){
										des16.outerHTML = '<input type="checkbox" class="des16" id="design1612"'
											+(des16.getAttribute('checked')!=null ?'':' checked="checked"')+'/>';
										saveLocStor();}
									if(des18 && /whiteMintOval/.test(t.id)){
										des18.outerHTML = '<input type="checkbox" class="des18" id="design1612"'
											+(des18.getAttribute('checked')!=null ?'':' checked="checked"')+'/>';
										saveLocStor();}
									if(butTyp && /butTypes/.test(t.id)){
										butTyp.outerHTML = '<input type="checkbox" class="butTyp" id="butTypes"'
											+(butTyp.getAttribute('checked')!=null ?'':' checked="checked"')+'/>';
										saveLocStor();}
									if(pdf || /site/.test(itrv)) {//console.log('==pdf|site');
										inputSearch.value = inputSearch.value.replace(new RegExp('(?:(\\s+OR\\s+)?\\s*'
											+(pdf ?'filetype':'site')+'(?::|%3A)\\s*\\S*)+|$','g')
											,s1 => fTMore || s1 ?'':' '+ (imSrch? itrv.toLowerCase() + num : itrv +(pdf ?'': fTyp)));}
									var l2 = startPg ? lh.replace(/^([^/]*)\/\/([^/]+)\/?([^?#]*)([?#]?.*)/, '$1//$2/search$4') : lh // insert '/search?' instead any
										,newSrch = /[?&]q=/.test(l2) ? l2.replace(/(&|\?)q=([^&]*)(&|$)/g,'$1q='+ encodeURIComponent(inputSearch.value) +'$3') //add value to '[?&]q=[^&]*'
											: l2 + (/\?/.test(l2) ?'&':'?') +'q='+ encodeURIComponent(inputSearch.value); //set new value as &q=.+
									//console.log('==inputSearch.value,newSrch,fTyp,pdf,num', inputSearch.value, newSrch, fTyp, pdf, num);
									if(pdf && !fTMore || num !==''&& num != +num){ev.stopPropagation();}
									if(buttSearcStart && (pdf && !fTMore || num !==''&& num != +num)){buttSearcStart.click();return}
									if(layout1811 && num !==''|| pdf) {pdf && ev.stopPropagation();
										if(!fTMore) location.href = /qdr(:|%3A)([dwmyh])\d*/.test(l2)
											? newSrch.replace(/([?&]tbs=)?qdr(:|%3A)[dwmyh]\d*/
												,function(x){return pdf ?'': (itrv + (imSrch?'': num)).replace(/&/, /\?/.test(x) ?'?':'&')}) //patch date in URL
											: newSrch + (/\?/.test(newSrch) ?'&':'?') + (pdf ?'': itrv + (imSrch?'': num)); //add date in URL
										else{if(t.classList.contains('txt')) {if(t.parentNode.classList.contains('more')) t.parentNode.className ='xButt lsb moreShow';
											else t.parentNode.className ='xButt lsb more';} //'className' because bug of Chrome in upper line with .toggle
												else {if(t.classList.contains('more')) t.className ='xButt lsb moreShow';
											else t.className ='xButt lsb more';}}} //bug of Fx with .toggle,.toggle - list is changed slow (0.4 s)
									$pd(ev);
								}})(fTyp,i=='PDF',fTMore)}//, mouseover: function(ev){ev.stopPropagation()}, mouseout: function(ev){ev.stopPropagation()}
								,apT: siteList
							});}
						siteList.style.height ='auto'; siteList.style.textAlign ='center'; siteList.style.marginRight ='-40px';
					}
				}
			}
		});

	}, el: d.body})}catch(er){console.log('==cB');cB()}
	var saveLocStor = function(ev, val, do2){ var aaa,aab,aac,aad,aae,aaf, t = ev && ev.target.form || document.documentElement || document.body;
		xLocStor({do: do2 ||'set', key:'sett'
			, val:{lang: (aaa=d.querySelectorAll('.lang', t))[aaa.length-1].value
				,sites: ((aab=d.querySelectorAll('.sites', t))[aab.length-1].value||'').replace(/^[ \t]*|[ \n\t]*$/g,'')
					.split('\n')
				,lastHoursLess: (aac=d.querySelectorAll('.less', t))[aac.length-1].checked
				,design1612: (aad=d.querySelectorAll('.des16', t))[aad.length-1].checked
				,whiteMintOval: (aae=d.querySelectorAll('.des18', t))[aae.length-1].checked
				,hiddenEdgeLeft: !(aaf=d.querySelectorAll('.butTyp', t))[aaf.length-1].checked
				,dwmyh: S.dwmyh || setts.dwmyh
			}
			,cB: function(prev){
				console.info('Settings are saved. prev=', prev);}
		});
		$q('.siteList .settIn').classList.add('changed');
	};

})({ //write "lang:''," to remove hints; 'en' for English hints (fr - Français, es - espagnol), 'ar' for Russian
	lang:''|| (navigator.languages && navigator.languages[1] || navigator.language.substr(0,2)) //='' if hide hints, or 2 letters from $l{}
	,sites: [ //=array or one site in string
		'','slashdot.org','reddit.com','techcrunch.com','habr.com','geektimes.com'
		,'smashingmagazine.com','engadget.com'] //write your favorite sites
	,lastHoursLess: 1 //=boolean - not show odd some values of hours after 8 h
	,design1612: 0 //=boolean - gray design is disabled for layout1811 ===== TODO enable
	,whiteMintOval: 1 //=boolean - white-mint-oval design with sticked search field
	,hiddenEdgeLeft: 0 //how many extra buttons to hide from left
	,dwmyh: [1,1,1,1,1] //=array of numbers - current vals of days, weeks, months, years, hours
	,fileType:{} // turn on or off {doc:1, txt:1}
	,meta:{} // on/off {Ask:1, }
		//TODO meta-data for search of same results {Ya:{title:'',txt:'',url:''},...}
	,imgFile:'' // one of: switch to img search or in img search
	,imgType:{} //{itp:'face'}
	,imgColor:{} //{isc:'blue'}
	,imgSize:{} //{isz:'i'}
	,imgSizeLt:{} //{islt:'vga'}
});
