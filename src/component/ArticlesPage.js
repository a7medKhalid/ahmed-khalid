
import React, { Component } from "react";
import { ArticlesData } from "./ArticlesData";


class ArticlesPage extends Component {
    render() {
        return (
            <div class="container mx-auto flex flex-wrap py-6">

                <section class="w-full md: flex flex-col items-center px-3">
                    {ArticlesData.map((article, index) => (
                        <article class="flex flex-col shadow my-4">
                        

                            <div class="bg-gray-800 flex flex-col justify-start p-6">
                                <a href="#" class="text-white text-sm font-bold uppercase pb-4">{article.category}</a>
                                <a href="#" class="text-3xl font-bold hover:text-gray-700 text-white pb-4">{article.title}</a>
                                
                                <a href="#" class="pb-6 text-white">{article.body}</a>
                            </div>
                        </article>
                    ))}
        
                   
                  
        
                </section>
            </div>
        );
    }
}


export default ArticlesPage;