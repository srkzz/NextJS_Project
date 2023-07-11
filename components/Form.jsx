import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {

    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'><span className='random_gradient'>{type} um Post</span></h1>
        
        <p className='desc text-left max-w-md'>
            {type} e partilha qualquer coisa com o mundo!
        </p>

        <form 
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism"
        >
        <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
                A tua partilha!
            </span>
            <textarea
                value={post.prompt}
                onChange={(e) => setPost({ ...post, prompt: e.target.value})}
                placeholder="Escreva aqui!"
                required
                className='form_textarea'
            />
        </label>    
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tags{" "}
            <span className='font-normal'>
              (#produtos, #webdevelopment, #ideas, #beleza, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>  

        <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href="/" className='text-gray-500 text-sm'>
                Cancelar
            </Link>

            <button 
                type='submit'
                disabled={submitting}
                className='hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full'
            >
                {submitting ? `${type} ...` : type}
            </button>
        </div>

        </form>   
        </section>
    );
};

export default Form;