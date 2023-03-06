
window.onload=function(){
    if(window.event.keyCode==13){
        book_save();
    }
};

    this.toString-function(){
        return " 제목:" +this.booktitle+ " 저자:" +this.writer+ " 출간년도:" + this.year+" 분류:"+this.kind+" 도서번호:"+this.booknum;
    }


var book_list = new Array();
book_init();
function book_init(){
    book_list.push(new book("하얼빈", "김훈", 2022, "소설", 20220001));
    book_list.push(new book("불편한 편의점2"));
    book_list.push(new book(""));
    book_list.push(new book(""));
    book_list.push(new book(""));
}

function book_save(){
    var title = document.querySelector("#booktitle");
    var writer = document.querySelector("#writer");
    var year = document.querySelector("#year");
    var kind = document.querySelector("#kind");
    var num = document.querySelector("#booknum");

    book_list.push(new book(title.value, writer.value, year.value, kind.value, num.value));
    alert(book_list[0].booktitle);
    
}

function book_print(){
    var out = document.querySelector("#list");
}