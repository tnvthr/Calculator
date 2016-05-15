var 일반_답 = 0;
var 일반 = 0;
var 일반식 = [];
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function procCmd(cmd){var da = cmd.split(" "); if(da[0]=="계산기"){일반계()}if(da[0]=="세부사항"){Detailsc()}if(da[0]=="c도움말"){ctx.runOnUiThread(new java.lang.Runnable({run: function(){try{var dialog = new android.app.AlertDialog.Builder(ctx); dialog.setTitle("[Calculator]_1.0"); dialog.setMessage("/c도움말 -  Calculator스크립트의 도움말을 봅니다.\n/계산기 -  숫자를 계산합니다.\n/세부사항 -  Calculator스크립트의 세부사항을 확인합니다."); dialog.setNegativeButton("닫기", null); dialog.show();
				}catch(e){clientMessage(e+", "+e.lineNumber);
				}
			}
		}));
}}
function 일반계(){ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{var dialog = new android.app.AlertDialog.Builder(ctx); var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(0);
layout.setGravity(android.view.Gravity.CENTER);
var textv = new android.widget.TextView(ctx);
var texte = new android.widget.EditText(ctx);
var textv2 = new android.widget.TextView(ctx);
var texte2 = new android.widget.EditText(ctx);
textv.setText("답: "+일반_답); textv.setTextColor(android.graphics.Color.parseColor('#2BD3A4')); 
textv.setTextSize(18);
texte.setHint("수를 적어주세요.");
texte.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
textv2.setText("식:   ");
texte2.setHint("수를 적어주세요.");
texte2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
layout.addView(textv); layout.addView(texte); layout.addView(textv2); layout.addView(texte2);
var scroll = android.widget.ScrollView(ctx);
var scroll2 = android.widget.HorizontalScrollView(ctx);
scroll.addView(layout); 
dialog.setView(scroll);
layout.setOrientation(0);
var 버튼1 = new android.widget.Button(ctx);
var 버튼2 = new android.widget.Button(ctx);
var 버튼3 = new android.widget.Button(ctx);
var 버튼4 = new android.widget.Button(ctx);
버튼1.setText("덧셈"); 버튼2.setText("뺄셈"); 버튼3.setText("곱셈"); 버튼4.setText("나누셈");
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.addView(버튼1); layout.addView(버튼2); layout.addView(버튼3); layout.addView(버튼4);
버튼1.setOnClickListener(new android.view.View.OnClickListener({onClick: function(){일반 = 1; if(일반==1){일반식="+"}textv2.setText(""+일반식)}}));
버튼2.setOnClickListener(new android.view.View.OnClickListener({onClick: function(){일반 = 2; 
if(일반==2){일반식="–"}
textv2.setText(""+일반식);
}}));
버튼3.setOnClickListener(new android.view.View.OnClickListener({onClick: function(){일반 = 3; 
if(일반==3){일반식="×"}
textv2.setText(""+일반식);
}}));
버튼4.setOnClickListener(new android.view.View.OnClickListener({onClick: function(){일반 = 4; 
if(일반==4){일반식="÷"}
textv2.setText(""+일반식)}}));
dialog.setTitle("일반 계산기");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("계산", new android.content.DialogInterface.OnClickListener({onClick: function(){
if(texte.getText()==""){texte.setText("0")}
	if(texte2.getText()==""){texte2.setText("0")}
	if(일반 === 1){일반_답 = parseInt(texte.getText())+parseInt(texte2.getText());
print("계산이 완료되었습니다."); 일반계(); 일반 = 0; if(일반==0){일반식=""}textv2.setText("")}
if(일반 === 2){일반_답 = parseInt(texte.getText())-parseInt(texte2.getText());
print("계산이 완료되었습니다."); 일반계(); 일반 = 0; if(일반==0){일반식=""}textv2.setText("")}
if(일반 === 3){일반_답 = parseInt(texte.getText())*parseInt(texte2.getText());
print("계산이 완료되었습니다."); 일반계(); 일반 = 0; if(일반==0){일반식=""}textv2.setText("")}
if(일반 === 4){일반_답 = parseInt(texte.getText())/parseInt(texte2.getText());
print("계산이 완료되었습니다."); 일반계(); 일반 = 0; if(일반==0){일반식=""}textv2.setText("")}
else if(일반 === 0){print("식을 선택해 주세요.")}}}));
dialog.show()}catch(e){clientMessage(e+", "+e.lineNumber); }}}));}
function Detailsc(){ctx.runOnUiThread(new java.lang.Runnable({run: function(){try{var dialog = new android.app.AlertDialog.Builder(ctx); dialog.setTitle("[Calculator] 세부사항"); dialog.setMessage("Name: Calculator\nVersion: 1.0\nAuthor: 숲속(shfwk1210@naver.com)\nGitHub: Woods(https://github.com/tnvthr)\nThe total production time: \n2016/05/15/ 07h.16m ~ \n2016/05/15/ 13h.47m\n"); dialog.setNegativeButton("취소", null); dialog.show()}catch(e){clientMessage(e+", "+e.lineNumber)}}})); }
