from flask import Flask, send_file

app = Flask(__name__)

@app.route('/get_pdf', methods=['GET'])
def get_pdf():
    # Specify the path to your PDF file
    pdf_file_path = '~/Curriculum Vitae_Chan Cheuk Him.pdf'
    
    try:
        return send_file(pdf_file_path, as_attachment=True)
    except Exception as e:
        return str(e), 404

if __name__ == '__main__':
    app.run()